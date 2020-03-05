import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ValkCupService from '../../services/ValkCupServices'
import { R6Logo } from '../../assets'


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
            })
        })
    }
    render() {
        return (
            <div className="prox-comp" id="prox-comp">
                <h3 className="section-title">PRÓXIMO TORNEO</h3>
                <img src={R6Logo} alt=""/>
                <p className="edicion">III EDICIÓN</p>
                <p className="edicion-date">Del {this.state.tournamentStartDay} de {this.state.tournamentStartMonth} al {this.state.tournamentEndDay} de {this.state.tournamentEndMonth}</p>
                <Link to="/team/create" className="btn btn-primary btn-home">Apúntate aquí</Link>
            </div>
        )
    }
}

export default ProxComp