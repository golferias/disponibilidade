import React, { Component, useState } from 'react'
import Container from './CalendarContainer'
import { connect } from 'react-redux'
import {
  dispatchUpdateTextFooter,
  dispatchUpdateTextHeader
} from '.././../../redux/actions/calendar'
import {
  dispatchUpdateFilterList,
  dispatchUpdateBySignalR,
  FetchData,
  // Bdelete,
  BookingFetchData
} from '.././../../redux/actions/booking'
import Loading from '../common/Loading'
import $ from 'jquery'

class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connection: null,
      isConnected: false,
      currentStartDate: ''
    }
  }

  componentDidMount () {
    const currentDate = new Date()
    let daysIndex = currentDate.getDay()

    if (daysIndex == 0) {
      daysIndex = 7
    }
    const startNextWeek = new Date(currentDate)
    startNextWeek.setDate(startNextWeek.getDate() - daysIndex + 1 + 7)
    this.state.currentStartDate = new Date(startNextWeek)

    this.props.BookingFetchData(startNextWeek)

    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(process.env.SIGNALR_URL)
      .configureLogging(signalR.LogLevel.Error)
      .build()

    this.state.connection = newConnection

    newConnection
      .start()
      .then(result => {
        console.log('Connected to API by signalR: ' + process.env.SIGNALR_URL)

        //var currentUserSeeStartWeek = this.state.currentStartDate

        newConnection.on('ReceiveMessage', availabilitySignalRDto => {
          var currentUserSeeStartWeek = this.state.currentStartDate
          var grabDateFromSignalR = new Date(availabilitySignalRDto.start)

          if (
            currentUserSeeStartWeek.getDate() ==
              grabDateFromSignalR.getDate() &&
            currentUserSeeStartWeek.getMonth() ==
              grabDateFromSignalR.getMonth() &&
            currentUserSeeStartWeek.getFullYear() ==
              grabDateFromSignalR.getFullYear()
          ) {
            this.props.dispatchUpdateBySignalR(availabilitySignalRDto.calendar)
          }
        })
      })
      .catch(e => {
        this.props.isConnected = false
        console.log('connection to signalr fail: ', e)
      })
  }

  render () {
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
            isLoadingCalendar={this.props.isLoadingCalendar}
            booking={this.props.booking}
            textheader={this.props.textheader}
            dispatchUpdateTextFooter={newDate => {
              this.props.dispatchUpdateTextFooter(newDate)
            }}
            dispatchUpdateFilterList={newDate => {
              this.props.dispatchUpdateFilterList(newDate)
              this.state.currentStartDate = newDate
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
    booking: state.booking.data,
    customers: state.customers.data,
    services: state.services.data,
    hasErrored: state.calendar.hasErrored,
    isLoading: state.booking.isLoading,
    isLoadingCalendar: state.booking.isLoadingCalendar,
    errorMessage: state.calendar.errorMessage,
    unauthorized: state.login.unauthorized
  }
}

export default {
  component: connect(mapStateToProps, {
    dispatchUpdateTextFooter,
    dispatchUpdateTextHeader,
    dispatchUpdateFilterList,
    dispatchUpdateBySignalR,
    FetchData,
    // Bdelete,
    // ServicesFetchData,
    BookingFetchData
    // customersFetchData
  })(Calendar)
}
