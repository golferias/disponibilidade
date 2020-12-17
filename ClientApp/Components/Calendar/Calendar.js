import React, { Component } from 'react'
import Container from './CalendarContainer'
import { connect } from 'react-redux'
import {
  dispatchUpdateTextFooter,
  dispatchUpdateTextHeader
} from '.././../../redux/actions/calendar'
import { dispatchUpdateFilterList } from '.././../../redux/actions/customers'

class Calendar extends Component {
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
            customers={this.props.customers}
            textheader={this.props.textheader}
            textfooter={this.props.textfooter}
            dispatchUpdateTextFooter={newDate => {
              this.props.dispatchUpdateTextFooter(newDate)
              this.props.dispatchUpdateFilterList(newDate)
            }}
            dispatchUpdateTextHeader={newDate => {
              this.props.dispatchUpdateTextHeader(newDate)
            }}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    textheader: state.calendar.textheader,
    textfooter: state.calendar.textfooter,
    customers: state.customers.data,
    hasErrored: state.customers.hasErrored,
    isLoading: state.customers.isLoading,
    errorMessage: state.customers.errorMessage
  }
}

export default {
  component: connect(mapStateToProps, {
    dispatchUpdateTextFooter,
    dispatchUpdateTextHeader,
    dispatchUpdateFilterList
  })(Calendar)
}
