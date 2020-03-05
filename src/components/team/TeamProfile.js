import React, { Component, Fragment } from 'react'
import ValkCupService from '../../services/ValkCupServices'
import TeamPlayerCard from './TeamPlayerCard'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import { Button } from 'react-bootstrap'
import { R6BG2, R6BG3, R6BG4 } from '../../assets'

class TeamProfile extends Component {
    state = {
        teamId: '',
        teamName: '',
        teamLogo: '',
        members: [],
    }

    componentDidMount() {
        ValkCupService.team(this.props.match.params.id)
        .then(team => {
            this.setState({
                teamId: team.id,
                teamName: team.teamName,
                teamLogo: team.logo,
                members: team.members
            })
        })
    }

    handleClick = () => {
        const { teamId } = this.state
        ValkCupService.deleteTeam(teamId)
            .then(deleted => {
                console.log('DELETED =>', deleted)
            })
    }

    render() {
        console.log(this.state)
        const { currentUser } = this.props

        return(
            <div className="team-profile">
                <div style={{backgroundColor: 'black',backgroundAttachment: 'fixed', backgroundImage: `url(${R6BG4})`, backgroundSize: 'cover', height: '400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center',marginTop: '-70px', padding: '40px 0 50px 0'}}>
                    <img src={this.state.teamLogo} alt='' style={{height: '100%'}}/>
                </div>
                <h3 className="team-title">{this.state.teamName}</h3>
                <div style={{display: 'flex', justifyContent: 'center',marginBottom: '30px'}}>
                    {currentUser && (
                        <Fragment>
                            <Button style={{marginRight: '20px'}} href="/team/edit" variant="primary">Editar equipo</Button>
                            <Button onClick={this.handleClick} href="#" variant="danger">Eliminar equipo</Button>
                        </Fragment>
                    )}
                </div>
                <h3 className="section-title">ROSTER</h3>
                <div className="container players-container">
                    {this.state.members.map(member => {
                        return <TeamPlayerCard key={member.id} member={member}/>
                    })}
                </div>
            </div>
        )
    }
}

export default WithAuthConsumer(TeamProfile)