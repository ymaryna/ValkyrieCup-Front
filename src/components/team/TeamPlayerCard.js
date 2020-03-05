import React, { Component } from 'react'
import { rank0, rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9, rank10, rank11, rank12, rank13, rank14, rank15, rank16, rank17, rank18, rank19, rank20, rank21 } from '../../assets'
import ValkCupService from '../../services/ValkCupServices'

class TeamPlayerCard extends Component {
    state = {
        userLevel: 0,
        userPlatform: '_',
        userMmr: 0,
        userRank: ['Unranked'],
        rankImage: [rank0],
    }

    componentDidMount(){
        ValkCupService.username( 'uplay', this.props.member.uplayNick)
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
    }

    render() {
        console.log(this.state)
        const { userLevel, userMmr, rankImage } = this.state
        const { avatar, uplayNick } = this.props.member
        return(
            <div className="team-player">
                <div className="nick">
                    <img style={{width: '50%'}} src={avatar} alt=""/>
                    <p>{uplayNick}</p>
                </div>
                <div style={{display: 'flex'}}>
                    <h3 className="section-title vertical-align-card black">RANK</h3>
                    <div>
                        <img style={{width:'85%'}} src={rankImage} alt=''/>
                        <p style={{marginTop: '10px'}}>Nivel: {userLevel}</p>
                        <p>Mmr: {userMmr}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamPlayerCard