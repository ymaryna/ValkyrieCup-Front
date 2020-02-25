import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ValkCupService from '../services/ValkCupServices'

class Register extends Component {
    state = {
        name: '',
        surname: '',
        username: '',
        uplayNick: '',
        discordNick: '',
        email: '',
        password: '',
        avatar: '',
        dni: '',
        age: 0,
        error: false,
        loading: false,
        success: false
    }

    handleChange = (event) => {
        const { name, value, files } = event.target

        this.setState({ [name]: files ? files[0] : value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    
        const {
            name, surname, username, uplayNick, discordNick,
            email, password, avatar, dni, age
        } = this.state
    
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('username', username)
        formData.append('uplayNick', uplayNick)
        formData.append('discordNick', discordNick)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('avatar', avatar)
        formData.append('dni', dni)
        formData.append('age', age)
    
        this.setState({ loading: true, error: false }, () => {
            ValkCupService.register(formData)
            .then(() => {
              this.setState({ success: true })
            })
            .catch(() => {
              this.setState({ error: true, loading: false })
            })
        })
      }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.state.success) {
          return <Redirect to="/login"/>
        }
        return ( 
            <div className="Register container">
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>

                    <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="name"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="name"
                    placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Apellidos</label>

                    <input
                    value={this.state.surname}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="surname"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="surname"
                    placeholder="Apellidos"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario</label>

                    <input
                    value={this.state.username}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="username"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="username"
                    placeholder="Nombre de usuario"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Nick de Uplay</label>

                    <input
                    value={this.state.uplayNick}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="uplayNick"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="uplayNick"
                    placeholder="Nick de Uplay"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Nick en Discord</label>

                    <input
                    value={this.state.discordNick}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="discordNick"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="discordNick"
                    placeholder="Nick en Discord"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    autoComplete="off"
                    name="email"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="email"
                    placeholder="Enter email"
                    />
                </div>

                <div className="form-group mb-5">
                    <label htmlFor="password">Password</label>

                    <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="password"
                    placeholder="Password"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>

                    <input
                    onChange={this.handleChange}
                    name="avatar"
                    type="file"
                    className={`form-control ${errorClassName}`}
                    id="avatar"
                    />
                </div>

                <div className="form-group mb-5">
                    <label htmlFor="password">DNI</label>

                    <input
                    value={this.state.dni}
                    onChange={this.handleChange}
                    name="dni"
                    type="text"
                    className={`form-control ${errorClassName}`}
                    id="dni"
                    maxLength="9"
                    placeholder="DNI"
                    />
                </div>

                <div className="form-group mb-5">
                    <label htmlFor="password">Edad</label>

                    <input
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                    type="number"
                    className={`form-control ${errorClassName}`}
                    id="age"
                    min="16"
                    max="100"
                    placeholder="Edad"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-block btn-primary mb-3"
                    disabled={this.state.loading}
                >
                    Sign up
                </button>
                </form>
            </div>
        )
    }
}

export default Register