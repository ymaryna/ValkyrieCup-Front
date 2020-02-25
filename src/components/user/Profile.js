import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import ValkCupService from '../../services/ValkCupServices'

class Profile extends Component {
    state = {
        userLevel: 0,
        userPlatform: '',
        userMmr: 0,
        userRank: []
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.data.userLevel && this.state.data.userLevel > prevState.data.userLevel) {
    //         console.info('Tus acciones')
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.data.userLevel !== nextState.data.userLevel
    // }

    componentDidMount() {
        ValkCupService.username( 'uplay', this.props.currentUser.uplayNick)
        .then(userInfo => {
            const user = userInfo.results[0]
            const ranks = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','Oro III','Oro II','Oro I','Platino III','Platino II']
            console.log(user)
            
            this.setState({
                userLevel: user.p_level,
                userPlatform: user.p_platform,
                userMmr: user.p_currentmmr,
                userRank: ranks[user.p_currentrank]
            })
        })
    }

    render() {
        console.log(this.props)
        const {name, surname, uplayNick, avatar} = this.props.currentUser
        const { userLevel, userMmr, userPlatform, userRank } = this.state
        
        return (
            <div>
                <Link to="/team/edit" className="btn btn-primary">Editar equipo</Link>
                <h1>{name}</h1>
                <h1>{surname}</h1>
                <h1>{uplayNick}</h1>
                <h1>{userLevel}</h1>
                <h1>{userMmr}</h1>
                <h1>{userPlatform}</h1>
                <h1>{userRank}</h1>
                <img style={{width: "50%"}} src={avatar} alt=""/>

            </div>
        )
    }
}

export default WithAuthConsumer(Profile)