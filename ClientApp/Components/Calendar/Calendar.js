import React, { Component } from 'react'
import Container from './CalendarContainer'
import { connect } from 'react-redux'
import {
  dispatchUpdateTextFooter,
  dispatchUpdateTextHeader
} from '.././../../redux/actions/calendar'
import {
  dispatchUpdateFilterList,
  FetchData,
  Bdelete
} from '.././../../redux/actions/booking'

class Calendar extends Component {
  // componentDidMount () {

  // const prom1 = this.props.FetchData()
  // return Promise.all([prom1])
  // }

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
            booking={this.props.booking}
            textheader={this.props.textheader}
            textfooter={this.props.textfooter}
            dispatchUpdateTextFooter={newDate => {
              this.props.dispatchUpdateTextFooter(newDate)
              this.props.dispatchUpdateFilterList(newDate)
            }}
            dispatchUpdateTextHeader={newDate => {
              this.props.dispatchUpdateTextHeader(newDate)
            }}
            delete={book => {
              this.props.Bdelete(book)
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
    booking: state.booking.datafiltered,
    customers: state.customers.data,
    hasErrored: state.calendar.hasErrored,
    isLoading: state.calendar.isLoading,
    errorMessage: state.calendar.errorMessage
  }
}

export default {
  component: connect(mapStateToProps, {
    dispatchUpdateTextFooter,
    dispatchUpdateTextHeader,
    dispatchUpdateFilterList,
    FetchData,
    Bdelete
  })(Calendar)
}
