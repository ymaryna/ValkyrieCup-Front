import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import ValkCupService from '../../services/ValkCupServices'
import { rank0, rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10, rank11, rank12, rank13, rank14, rank15, rank16, rank17, rank18, rank19, rank20, rank21, R6Logo } from '../../assets'
import AdminProfile from './AdminProfile'
import GroupStage from '../pages/GroupStage'
import Bracket from '../pages/Bracket'

class Profile extends Component {
    state = {
        userId: this.props.currentUser.id,
        userLevel: 0,
        userPlatform: '_',
        userMmr: 0,
        userRank: [],
        team: false,
        rankImage: [rank0],
        teamId: '',
        teamName: '_',
        teamMembers: ['_'],
        admin: false
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.data.userLevel !== nextState.data.userLevel
    // }
    
    componentDidMount() {
        ValkCupService.username( 'uplay', this.props.currentUser.uplayNick)
        .then(userInfo => {
            const user = userInfo.results[0]
            console.log('USER ID => ', user.p_id)
            const ranks = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','Oro III','Oro II','Oro I','Platino III','Platino II']
            const ranksImg = [rank0, rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10, rank11, rank12, rank13, rank14, rank15, rank16, rank17, rank18, rank19, rank20, rank21]
            ValkCupService.userStats(user.p_id)
            .then(user => {
                this.setState({
                    userLevel: user.p_level,
                    userPlatform: user.p_platform,
                    userMmr: user.ranked.mmr,
                    userRank: ranks[user.ranked.rank],
                    rankImage: ranksImg[user.ranked.rank]
                })
            })
        })
        console.log(this.props.currentUser.id)
        
        ValkCupService.user(this.props.currentUser.id)
        .then(user => {
            if(user.admin) {
                this.setState({
                    admin: true
                })
            } else if(user.team[0]) {
                this.setState({
                    team: true,
                    teamId: user.team[0].id,
                    teamName: user.team[0].teamName,
                    teamMembers: user.team[0].members
                })
            }
        })
    }

    render() {
        const {uplayNick, avatar} = this.props.currentUser
        const { userLevel, userMmr, userRank, rankImage, teamName, teamMembers, teamId, team, admin } = this.state
        let teamButton
        let teamRender
        if(team) {
            teamButton = <Link to={`/team/profile/${teamId}`} className="btn btn-primary">Ver equipo</Link>
            teamRender = <div className="info">
                            <div className="team">
                                <h3 className="section-title vertical-align-card black">TEAM</h3>
                                <h2>{teamName}</h2>
                            </div>
                            <div style={{marginTop: '20px'}}>
                                {teamMembers.map(member => {
                                    return(
                                        <div key={member.id} style={{padding: '10px', borderRadius: '.25rem', backgroundColor: 'black', margin: '4px', textAlign: 'left', height: '3rem', display: 'flex', 
                                        justifyContent: 'space-between'}}>
                                            <img style={{height: '100%', marginRight: '20px'}} src={member.avatar} alt=''/>
                                            <p style={{margin: '0', marginRight: 'auto', fontSize: '1rem'}} >{member.uplayNick}</p>
                                            <Link style={{padding: '.275rem .55rem',fontSize: '.75rem'}} to={`/user/${member.id}`} className="btn btn-primary">Ver Perfil</Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
        }
        else {
            teamRender = <div className="info">
                            <div className="team">
                                <h3 className="section-title vertical-align-card black">TEAM</h3>
                                <h2>No team</h2>
                            </div>
                        </div>
        }
        if(admin) {
            return(
                <div>
                    <AdminProfile />
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="profile">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={avatar} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{uplayNick}</h5>
                                <Link style={{marginRight: '10px'}} to="#" className="btn btn-primary">Editar perfil</Link>
                                {teamButton}
                            </div>
                        </div>
                        <div className="info small">
                            <div className="rank">
                                <h3 className="section-title vertical-align-card black">RANK</h3>
                                <h2>{userRank}</h2>
                            </div>
                            <img style={{width:'100%'}} src={rankImage} alt=''/>
                            <p style={{marginTop: '10px'}}>Nivel: {userLevel}</p>
                            <p>Mmr: {userMmr}</p>
                            
                        </div>
                        {teamRender}
                    </div>
                    <div className="profile">
                        <div className="info stats">
                            <h3 className="section-title" style={{textAlign: 'center', marginTop: '40px'}}>TORNEOS ACTIVOS</h3>
                            <div className="tournament">
                                <img src={R6Logo} width="60%" style={{padding: '50px 50px 20px 50px'}} alt=""/>
                                <p>Fecha de inicio: <span style={{color: '#bce439'}}>31 de Junio</span></p>
                                <p style={{padding: '0 0 20px 0'}}>Status: <span style={{color: '#bce439'}}>Octavos</span></p>
                                <Link style={{marginBottom: '50px'}} to={"/tournament/rainbow-six-siege"} className="btn btn-primary">Ver Más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default WithAuthConsumer(Profile)