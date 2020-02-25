import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ValkCupService from '../../services/ValkCupServices'

class ProxComp extends Component {
    state = {
        tournamentGame: '',
        tournamentStartDay: '',
        tournamentStartMonth: '',
        tournamentEndDay: '',
        tournamentEndMonth: '',
        tournamentLogo: '',
    }

    componentDidMount() {
        ValkCupService.tournament('5e542f104267dc1aeb300e2d')
        .then(tournament => {
            this.setState({
                tournamentGame: tournament.game,
                tournamentStartDay: tournament.date.start.day,
                tournamentStartMonth: tournament.date.start.month,
                tournamentEndDay: tournament.date.end.day,
                tournamentEndMonth: tournament.date.end.month
            }, () => console.log('STATE TOURNAMENT ', this.state))
        })
    }
    render() {
        return (
            <div className="prox-competicion" style={{
                height: 'auto',
                fontFamily: 'Anton',
                fontSize: '20%',
                fontWeight: '900',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundImage: 'url("https://i.ibb.co/FHHG0ry/bg.png")',
                backgroundSize: '100%',
                paddingTop: '20px',

            }}>
                <h3 style={{
                    fontSize: '4vw',
                    textAlign: 'center',
                    marginTop: '15px', 
                    textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
                    color: '#191919',
                }}>PRÓXIO TORNEO</h3>
                <img src="https://i.ibb.co/VYkQS21/Mesa-de-trabajo-4.png" alt="" style={{
                    width: '60%',
                    marginTop: '10px',
                }}/>
                <p style={{
                    color: "white",
                    fontSize: '4vw',
                    marginTop: '10px'
                }}>III EDICIÓN</p>
                <p style={{
                    fontFamily: 'Montserrat',
                    fontWeight: '700',
                    color: '#bce439',
                    fontSize: '3vw',
                }}>Del {this.state.tournamentStartDay} de {this.state.tournamentStartMonth} al {this.state.tournamentEndDay} de {this.state.tournamentEndMonth}</p>
                <Link to="/team/create" className="btn btn-primary" style={{
                    padding: '.8vw 2vw',
                    fontSize: '1.6vw',
                    borderRadius: '.25vw',
                    margin: '20px 0 30px 0'
                }}>Apúntate aquí</Link>
            </div>
        )
    }
}

export default ProxComp