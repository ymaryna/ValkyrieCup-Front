import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CardGroup = ({ group }) => {

    const imgStyles = {
        height: '100%',
        marginRight: '20px'
    }

    return (
        <Fragment>
            {group.map((team, index) =>
                <div className="team" key={index}>
                    <img style={imgStyles} src={team.logo} alt='Logo' />
                    <p style={{margin: '0px auto 0px 0px', fontSize: '1rem', color: 'white'}}>{team.teamName}</p>
                    <Link style={{padding: '.275rem .55rem',fontSize: '.75rem'}} to={`/team/profile/${team.id}`} className="btn btn-primary">Ver Equipo</Link>
                </div>
            )}
        </Fragment>
    )
}

export default CardGroup