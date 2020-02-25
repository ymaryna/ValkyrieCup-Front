import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ValkCupService from '../../services/ValkCupServices'
import SearchBar from '../../ui/SearchBar'
import { WithAuthConsumer } from '../../contexts/AuthContext'

class EditTeam extends Component {
    state = {
        teamName: '',
        teamId: '',
        members: [],
        uplayNick: '',
        users: [],
        logo: '',
        error: false,
        loading: false,
        success: false
    }
    counter = 0
    timeId = null

    componentDidMount() {

        ValkCupService.user(this.props.currentUser.id)
            .then(user => {
                this.setState({
                    members: user.team[0].members,
                    teamId: user.team[0].id
                })
            })
            // .then(() =>{
            //     for(let i = 0; i <= this.state.membersId.length; i++) {
            //         this.state.membersId[0] 
            //     }
            //     this.state.membersId.map(member => {

            //     })
            //     ValkCupService.user(this.props.currentUser.id)
            //         .then(user => {
            //             this.setState({
            //                 membersId: [...this.state.membersId, user.team.members]
            //             })
            //         })
            // })
        
    }

    handleClick = (user) => {
        this.setState({
            members: [...this.state.members, user.uplayNick]
        }, () => console.log(this.state.members))
    }

    handleClickDiscard = (email) => {
        this.setState({
            members: this.state.members.filter(member => email !== member)
        })
    }

    handleSearch = (event) => {
        const { name, value } = event.target
        clearInterval(this.timeId)
    
        this.setState({ [name]: value })
        
        if(value.length >= 3) {
            this.timeId = setTimeout(() => {
                const { uplayNick } = this.state
                ValkCupService.users({uplayNick})
                .then(users => {
                    console.log('counter => ', ++this.counter)
                    this.setState({ users }, () => console.info('state => ', this.state.users))
                })
            }, 500)
        } else if(value.length <= 0) {
            this.setState({ users: [] })
        }
    }

    handleChange = (event) => {
        const { name, value, files } = event.target

        this.setState({ [name]: files ? files[0] : value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    
        const { teamName, members, logo } = this.state
    
        const formData = new FormData()
        formData.append('teamName', teamName)
        formData.append('members', JSON.stringify(members))
        formData.append('logo', logo)
    
        this.setState({ loading: true, error: false }, () => {
            ValkCupService.editTeam(formData, this.teamId)
            .then(() => {
              this.setState({ success: true })
            })
            .catch(() => {
              this.setState({ error: true, loading: false })
            })
        })
      }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        const {handleSearch, handleClick, handleClickDiscard} = this
        const {users, uplayNick, members} = this.state

        if (this.state.success) {
          return <Redirect to="/login"/>
        }
        return ( 
            <div className="Register container">
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="teamName">Nuevo nombre del equipo</label>

                    <input
                    value={this.state.teamName}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="teamName"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="teamName"
                    placeholder="Nombre del equipo"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="members">Nuevos miembros</label>

                    <SearchBar {...{ users, errorClassName, uplayNick, handleSearch, handleClick, members, handleClickDiscard }} />
                </div>

                <div className="form-group">
                    <label htmlFor="logo">Cambiar logo</label>

                    <input
                    onChange={this.handleChange}
                    name="logo"
                    type="file"
                    className={`form-control ${errorClassName}`}
                    id="logo"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-block btn-primary mb-3"
                    disabled={this.state.loading}
                >Editar equipo</button>
                </form>
            </div>
        )
    }
}

export default WithAuthConsumer(EditTeam)