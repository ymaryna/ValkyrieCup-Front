import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ValkCupService from '../../services/ValkCupServices'
import { rank0, rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10, rank11, rank12, rank13, rank14, rank15, rank16, rank17, rank18, rank19, rank20, rank21, R6Logo } from '../../assets'

class UserProfile extends Component {
    state = {
        userId: '',
        uplayNick: '_',
        avatar: '',
        userLevel: 0,
        userPlatform: '_',
        userMmr: 0,
        userRank: ['Unranked'],
        rankImage: [rank0],
        teamName: '_',
        teamMembers: ['_'],
    }

    componentDidMount() {
    //     const { match: { params } } = this.props
    //     console.log('ID USER => ', params.id)
        ValkCupService.user(this.props.match.params.id)
        .then(user => {
            this.setState({
                userId: user.id,
                uplayNick: user.uplayNick,
                avatar: user.avatar,
                teamName: user.team[0].teamName,
                teamMembers: user.team[0].members,
            })
            return user
        })
        .then(user => {
            ValkCupService.username( 'uplay', user.uplayNick)
            .then(userInfo => {
                if(userInfo.totalresults !== 0) {
                    const user = userInfo.results[0]
                    const ranks = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','Oro III','Oro II','Oro I','Platino III','Platino II']
                    const ranksImg = [rank0, rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10, rank11, rank12, rank13, rank14, rank15, rank16, rank17, rank18, rank19, rank20, rank21]
                    
                    this.setState({
                        userLevel: user.p_level,
                        userPlatform: user.p_platform,
                        userMmr: user.p_currentmmr,
                        userRank: ranks[user.p_currentrank],
                        rankImage: ranksImg[user.p_currentrank]
                    })
                }
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            ValkCupService.user(this.props.match.params.id)
            .then(user => {
                this.setState({
                    userId: user.id,
                    uplayNick: user.uplayNick,
                    avatar: user.avatar,
                    teamName: user.team[0].teamName,
                    teamMembers: user.team[0].members,
                })
                return user
            })
            .then(user => {
                ValkCupService.username( 'uplay', user.uplayNick)
                .then(userInfo => {
                    if(userInfo.totalresults !== 0) {
                        const user = userInfo.results[0]
                        const ranks = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','Oro III','Oro II','Oro I','Platino III','Platino II']
                        const ranksImg = [rank0, rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10, rank11, rank12, rank13, rank14, rank15, rank16, rank17, rank18, rank19, rank20, rank21]
                        
                        this.setState({
                            userLevel: user.p_level,
                            userPlatform: user.p_platform,
                            userMmr: user.p_currentmmr,
                            userRank: ranks[user.p_currentrank],
                            rankImage: ranksImg[user.p_currentrank]
                        })
                    } else {
                        this.setState({
                            userLevel: '_',
                            userPlatform: '_',
                            userMmr: '_',
                            userRank: 'Unranked',
                            rankImage: rank0
                        })
                    }
                })
            })
        }
    }

    render() {
        const { uplayNick, avatar, userLevel, userMmr, userRank, rankImage, teamName, teamMembers } = this.state
        
        return (
            <div className="container">
                <div className="profile">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={avatar} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{uplayNick}</h5>
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
                    <div className="info">
                        <div className="team">
                            <h3 className="section-title vertical-align-card black">TEAM</h3>
                            <h2>{teamName}</h2>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            {teamMembers.map((member, index) => {
                                return(
                                    <div style={{padding: '10px', borderRadius: '.25rem', backgroundColor: 'black', margin: '4px', textAlign: 'left', height: '3rem', display: 'flex', 
                                    justifyContent: 'space-between'}} key={index}>
                                        <img style={{height: '100%', marginRight: '20px'}} src={member.avatar} alt=''/>
                                        <p style={{margin: '0', marginRight: 'auto', fontSize: '1rem'}} >{member.uplayNick}</p>
                                        <Link style={{padding: '.275rem .55rem',fontSize: '.75rem'}} to={`/user/${member.id}`} className="btn btn-primary">Ver Perfil</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
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

export default UserProfile