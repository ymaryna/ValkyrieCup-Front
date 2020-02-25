import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import ValkCupService from '../services/ValkCupServices'
import { WithAuthConsumer } from '../contexts/AuthContext'

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: false, 
        loading: false
      }
    
      handleChange = (event) => {
        const { name, value } = event.target
    
        this.setState({[name]: value})
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
    
        this.setState({ loading: true, error: false }, () => {
            ValkCupService.login({ ...this.state })
            .then(
              (user) => {
                this.props.setUser(user)
              },
              () => {
                this.setState({ error: true, loading: false })
              }
            )
        })
      }
    
      render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''
    
        if (this.props.currentUser) {
          return <Redirect to="/tweets"/>
        }
    
        return (
          <div className="Login container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
    
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  autoComplete="off"
                  name="email"
                  type="email"
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
                  type="password"
                  className={`form-control ${errorClassName}`}
                  id="password"
                  placeholder="Password"
                />
              </div>
                  
              <button
                type="submit"
                className="btn btn-block btn-primary mb-3"
                disabled={this.state.loading}
              >
                Log in
              </button>
    
              <Link className="d-flex justify-content-center" to="/signup">Singup</Link>
            </form>
          </div>
        )
      }
}

export default WithAuthConsumer(Login)