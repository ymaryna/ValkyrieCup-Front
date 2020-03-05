import React, { Component } from 'react'
import ValkCupService  from '../../services/ValkCupServices'
import  { Link } from 'react-router-dom'

class TournamentTeams extends Component {
    state = {
        teams: []
    }

    componentDidMount(){
        ValkCupService.teams('5e415fa22438ab04dba2c3e9')
        .then(teams => {
            this.setState({
                teams: teams
            })
        })
    }

    render() {

        return(
            <div className="section-teams">
                <div>
                    <h3 className="section-title vertical-align">EQUIPOS</h3>
                </div>
                <div className="team-card-container">
                    {this.state.teams.map(team => {
                        return(
                            <div key={team.id} className="team-card">
                                <h5 className="title">{team.teamName}</h5>
                                <div className="roster">
                                    <h3 className="section-title vertical-align-card">ROSTER</h3>
                                    <div className="roster-names">
                                    {team.members.map(member => {
                                        return(
                                            <Link to={`/user/${member.id}`} key={member.id}>{member.uplayNick}</Link>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TournamentTeams