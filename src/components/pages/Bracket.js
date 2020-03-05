import React, { Component } from 'react'
import ValkCupServices from '../../services/ValkCupServices'
import { Link } from 'react-router-dom'
import { bracketBG } from '../../assets'

class Bracket extends Component {
    state = {
        eighths: [],
        quarters: [
            {
                team1: {
                    teamName: 'Ganador match 0'
                },
                team2: {
                    teamName: 'Ganador match 1'
                },
            },
            {
                team1: {
                    teamName: 'Ganador match 2'
                },
                team2: {
                    teamName: 'Ganador match 3'
                },
            },
            {
                team1: {
                    teamName: 'Ganador match 4'
                },
                team2: {
                    teamName: 'Ganador match 5'
                },
            },
            {
                team1: {
                    teamName: 'Ganador match 6'
                },
                team2: {
                    teamName: 'Ganador match 7'
                },
            },
        ],
        semis: [
            {
                team1: {
                    teamName: 'Ganador match 8'
                },
                team2: {
                    teamName: 'Ganador match 9'
                },
            },
            {
                team1: {
                    teamName: 'Ganador match 10'
                },
                team2: {
                    teamName: 'Ganador match 11'
                },
            }
        ],
        final: {
            team1: {
                teamName: 'Ganador match 12'
            },
            team2: {
                teamName: 'Ganador match 13'
            },
            winner: 'Ganador final'
        }
    }

    componentWillMount() {
        ValkCupServices.bracket('5e5c32dd1d89acad5330646f')
        .then(bracket => {
            this.setState({
                eighths: bracket.eighths
            })
        })
    }

    resultVerification(result) {
        console.log(result)
        if(result >= 0) {
            return(
                <div className="result">
                    {result}
                </div>
            )
        } else {
            return(
                <div className="result">
                    -
                </div>
            )
        }
    }

    render() {
        const { eighths, quarters, semis, final } = this.state
        
        return(
            <div style={{backgroundImage: `url(${bracketBG})`, backgroundSize: 'cover'}} className="section-bracket">
                <div style={{marginRight: '115px'}}>
                    <h3 className="section-title vertical-align">BRACKET</h3>
                </div>
                <div className="bracket-container">
                    <div style={{position: 'absolute',
                                left: '0rem',
                                top: '1.375rem',
                                width: '12rem',
                                height: '3.875rem'}}>
                    {eighths.map((match, index) => {
                            return(
                                <div className="match" key={match.id}>
                                    <div className="header">
                                        <div className="name">MATCH {index}</div>
                                    </div>
                                    <div className="record">
                                        <div className="opponent">
                                            <div className="win">
                                                <Link to={`/team/profile/${match.team1.id}`}>{match.team1.teamName}</Link>
                                            </div>
                                            {this.resultVerification(match.resultTeam1)}
                                        </div>
                                        <div className="opponent">
                                            <div className="win">
                                                <Link to={`/team/profile/${match.team2.id}`}>{match.team2.teamName}</Link>
                                            </div>
                                            {this.resultVerification(match.resultTeam2)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{position: 'absolute',
                                left: '16.4rem',
                                top: '4.1rem',
                                width: '12rem',
                                height: '3.875rem'}}>
                    {quarters.map((match, index) => {
                            return(
                                <div className="match quarters" key={index}>
                                    <div className="header">
                                        <div className="name">MATCH {8 + index}</div>
                                    </div>
                                    <div className="record">
                                        <div className="opponent">
                                            <div className="win">
                                                {match.team1.teamName}
                                            </div>
                                            <div className="result">
                                                -
                                            </div>
                                        </div>
                                        <div className="opponent">
                                            <div className="win">
                                                {match.team2.teamName}
                                            </div>
                                            <div className="result">
                                                -
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{position: 'absolute',
                                left: '32rem',
                                top: '9.3rem',
                                width: '12rem',
                                height: '3.875rem'}}>
                    {semis.map((match, index) => {
                            return(
                                <div className="match semis" key={index}>
                                    <div className="header">
                                        <div className="name">MATCH {12 + index}</div>
                                    </div>
                                    <div className="record">
                                        <div className="opponent">
                                            <div className="win">
                                                {match.team1.teamName}
                                            </div>
                                            <div className="result">
                                                -
                                            </div>
                                        </div>
                                        <div className="opponent">
                                            <div className="win">
                                                {match.team2.teamName}
                                            </div>
                                            <div className="result">
                                                -
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{position: 'absolute',
                                    left: '47.4rem',
                                    top: '19.6rem',
                                    width: '12rem',
                                    height: '3.875rem'}}>
                        <div className="match final">
                            <div className="header">
                                <div className="name">MATCH 14</div>
                            </div>
                            <div className="record">
                                <div className="opponent">
                                    <div className="win">
                                        {final.team1.teamName}
                                    </div>
                                    <div className="result">
                                        -
                                    </div>
                                </div>
                                <div className="opponent">
                                    <div className="win">
                                        {final.team2.teamName}
                                    </div>
                                    <div className="result">
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{position: 'absolute',
                                    left: '61.6rem',
                                    top: '20.2rem',
                                    width: '12rem',
                                    height: '3.875rem'}}>
                        <div className="match final">
                            <div className="header">
                                <div className="name">WINNER</div>
                            </div>
                            <div className="record">
                                <div className="opponent">
                                    <div className="win">
                                        {final.winner}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* <svg style={{width: '1749px'}} class="bracket-links" x="0" y="0" viewBox="0 0 98000 151000"><polyline className="link winner" points="40000,10250 41000,10250 41000,10250 41000,19500 42000,19500 " fill="none"></polyline><polyline class="link winner" points="40000,28750 41000,28750 41000,28750 41000,19500 42000,19500 " fill="none"></polyline><polyline class="link winner" points="26000,5625 27000,5625 27000,5625 27000,10250 28000,10250 " fill="none"></polyline><polyline class="link winner" points="26000,14875 27000,14875 27000,14875 27000,10250 28000,10250 " fill="none"></polyline><polyline class="link winner" points="12000,3312.5 13000,3312.5 13000,3312.5 13000,5625 14000,5625 " fill="none"></polyline><polyline class="link winner" points="12000,7937.5 13000,7937.5 13000,7937.5 13000,5625 14000,5625 " fill="none"></polyline><polyline class="link winner" points="12000,12562.5 13000,12562.5 13000,12562.5 13000,14875 14000,14875 " fill="none"></polyline><polyline class="link winner" points="12000,17187.5 13000,17187.5 13000,17187.5 13000,14875 14000,14875 " fill="none"></polyline><polyline class="link winner" points="26000,24125 27000,24125 27000,24125 27000,28750 28000,28750 " fill="none"></polyline><polyline class="link winner" points="26000,33375 27000,33375 27000,33375 27000,28750 28000,28750 " fill="none"></polyline><polyline class="link winner" points="12000,21812.5 13000,21812.5 13000,21812.5 13000,24125 14000,24125 " fill="none"></polyline><polyline class="link winner" points="12000,26437.5 13000,26437.5 13000,26437.5 13000,24125 14000,24125 " fill="none"></polyline><polyline class="link winner" points="12000,31062.5 13000,31062.5 13000,31062.5 13000,33375 14000,33375 " fill="none"></polyline><polyline class="link winner" points="12000,35687.5 13000,35687.5 13000,35687.5 13000,33375 14000,33375 " fill="none"></polyline></svg> */}
                </div>
            </div>
        )
    }
}

export default Bracket