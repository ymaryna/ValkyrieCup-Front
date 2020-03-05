import React, { Component } from 'react'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import { Button } from 'react-bootstrap'

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
          <Button
          onClick={this.handleClick}
          type="submit"
          className="btn btn-primary"
          disabled={this.state.loading}
          >Logout</Button>
        )
    }
}

export default WithAuthConsumer(Logout)