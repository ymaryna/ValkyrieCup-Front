import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import ValkCupServices from '../../services/ValkCupServices'
import { R6Logo } from '../../assets'

class AdminProfile extends Component {
    state = {
        torneo: '',
        bracket: '',
        matches: ''
    }

    componentDidMount() {
        ValkCupServices.tournament('5e415fa22438ab04dba2c3e9')
        .then(torneo => {
            this.setState({
                torneo: torneo
            })
        })

        ValkCupServices.bracket('5e5c32dd1d89acad5330646f')
        .then(bracket => {
            this.setState({
                bracket: bracket
            })
        })

        ValkCupServices.matches('5e415fa22438ab04dba2c3e9')
        .then(matches => {
            this.setState({
                matches: matches
            })
        })
    }

    render() {
        console.log(this.state.torneo)
        const { currentUser } = this.props
        const { torneo, bracket, matches } = this.state

        return(
            <div className="container">
                <div className="profile">
                        <div className="info stats admin">
                            <h3 className="section-title" style={{textAlign: 'center', margin: '40px 0'}}>TORNEOS ACTIVOS</h3>
                            <div className="tournament">
                                <img src={R6Logo} width="60%" style={{padding: '50px 50px 20px 50px'}} alt=""/>
                                <p>Fecha de inicio: <span style={{color: '#bce439'}}>31 de Junio</span></p>
                                <p style={{padding: '0 0 20px 0'}}>Status: <span style={{color: '#bce439'}}>Octavos</span></p>
                                <div style={{paddingBottom: '20px'}}>
                                    <Link style={{marginRight: '20px'}} to={`/edit/tournament/${torneo.id}`} className="btn btn-primary">Editar Torneo</Link>
                                    <Link style={{}} to={"/tournament/rainbow-six-siege"} className="btn btn-primary">Ver Más</Link>
                                </div>
                                <div style={{paddingBottom: '50px'}}>
                                    <Link style={{}} to={`/edit/bracket/${bracket.id}`} className="btn btn-primary">Editar Bracket</Link>
                                    <Link style={{marginLeft: '20px', marginRight: '20px'}} to={`/edit/matches/${bracket.id}`} className="btn btn-primary">Actualizar Resultados</Link>
                                    <Link style={{}} to={`/edit/matches/${bracket.id}`} className="btn btn-primary">Añadir Partido</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default WithAuthConsumer(AdminProfile)