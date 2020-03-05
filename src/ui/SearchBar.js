import React from 'react'
import { Link } from 'react-router-dom'
import './SeatchBar.css'

const SearchBarUI = ({uplayNick, handleSearch, errorClassName, users, handleClick, members, handleClickDiscard}) => {
    return (
        <div>
            <input
                value={ uplayNick }
                onChange={ handleSearch }
                autoComplete="off"
                name="uplayNick"
                type="uplayNick"
                className={`form-control ${errorClassName}`}
                id="uplayNick"
                placeholder="Search..."
            />

            <div >
                {
                    members.map(member => {
                        return(
                            <div className="members-container" key={member}>
                                <div className="members-choosen">{member}</div>
                                <Link to="#" onClick={() => handleClickDiscard(member)}>
                                    <div className="discard"></div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className="cards-container">
                {users.map(user => {
                    return(
                        <div key={user.id} className="card" style={{width: '10rem'}}>
                            <img className="card-img-top" src={user.avatar} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{user.uplayNick}</h5>
                                <Link to="#" onClick={() => handleClick(user)} className="btn btn-primary">Añadir</Link>
                            </div>
                      </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchBarUI