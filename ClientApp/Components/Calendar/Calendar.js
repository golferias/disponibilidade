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
  // Bdelete,
  BookingFetchData
} from '.././../../redux/actions/booking'
import Loading from '../common/Loading'
import LoginUnsuccessful from '../Login/LoginUnsuccessful'
import { customersFetchData } from '.././../../redux/actions/customers'
import { ServicesFetchData } from '.././../../redux/actions/services'

class Calendar extends Component {
  componentDidMount () {
    if (!this.props.unauthorized) {
    }
    // this.props.customersFetchData()
    // this.props.ServicesFetchData()
    const currentDate = new Date()
    let daysIndex = currentDate.getDay()

    if (daysIndex == 0) {
      daysIndex = 7
    }
    const startNextWeek = new Date(currentDate)
    startNextWeek.setDate(startNextWeek.getDate() - daysIndex + 1 + 7)

    this.props.BookingFetchData(startNextWeek)
  }

  render () {
    // if (this.props.unauthorized) {
    //   return <LoginUnsuccessful />
    // } else
    if (this.props.isLoading) {
      return <Loading title='A carregar dados...' />
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
            // services={this.props.services}
            // customers={this.props.customers}
            booking={this.props.booking}
            textheader={this.props.textheader}
            // textfooter={this.props.textfooter}
            dispatchUpdateTextFooter={newDate => {
              this.props.dispatchUpdateTextFooter(newDate)

              //this.props.BookingFetchData(newDate)
            }}
            dispatchUpdateFilterList={newDate => {
              this.props.dispatchUpdateFilterList(newDate)
            }}
            dispatchUpdateTextHeader={newDate => {
              this.props.dispatchUpdateTextHeader(newDate)
            }}
            // delete={book => {
            //   this.props.Bdelete(book)
            // }}
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
    booking: state.booking.data,
    customers: state.customers.data,
    services: state.services.data,
    hasErrored: state.calendar.hasErrored,
    isLoading: state.booking.isLoading,
    errorMessage: state.calendar.errorMessage,
    unauthorized: state.login.unauthorized
  }
}

export default {
  component: connect(mapStateToProps, {
    dispatchUpdateTextFooter,
    dispatchUpdateTextHeader,
    dispatchUpdateFilterList,
    FetchData,
    // Bdelete,
    // ServicesFetchData,
    BookingFetchData
    // customersFetchData
  })(Calendar)
}
