import React, { Component } from 'react'
import { WithAuthConsumer } from '../../contexts/AuthContext'

class Logout extends Component {
    state = {
        error: false, 
        loading: false
      }

    handleClick = (event) => {
        event.preventDefault()
    
        this.setState({ loading: true, error: false }, () => {
            this.props.logout()
        })
      }
    render() {
        return(
          <button
          onClick={this.handleClick}
          type="submit"
          className="btn btn-primary"
          disabled={this.state.loading}
          >Logout</button>
        )
    }
}

export default WithAuthConsumer(Logout)