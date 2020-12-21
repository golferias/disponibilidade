import React, { Component } from 'react'
import Container from './ServicesContainer'
import { connect } from 'react-redux'
import { FetchData, Bdelete } from '.././../../redux/actions/services'

class Services extends Component {
 
  render () {
    if (this.props.isLoading) {
      return (
        <div className='alert alert-info alert-dismissible fade show'>
          <h1>Loading...</h1>
        </div>
      )
    } else if (this.props.hasErrored) {
      return (
        <div className='alert alert-danger alert-dismissible fade show'>
          <h1>Falha ao ler os dados: {this.props.errorMessage}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <Container
            services={this.props.services}
            delete={service => {
              this.props.Bdelete(service)
            }}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    services: state.services.data,
    hasErrored: state.services.hasErrored,
    isLoading: state.services.isLoading,
    errorMessage: state.services.errorMessage
  }
}

export default {
  component: connect(mapStateToProps, { FetchData, Bdelete })(Services)
  
}
