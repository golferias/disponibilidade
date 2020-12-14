import React, { Component } from 'react'
import Container from './CalendarContainer'
import { connect } from 'react-redux'
import {
  dispatchUpdateTextFooter,
  dispatchUpdateTextHeader
} from '.././../../redux/actions/calendar'

class Calendar extends Component {
  componentDidMount () {}

  dispatchUpdateTextFooter (newDate) {
    props.dispatchUpdateTextFooter(newDate)
  }

  dispatchUpdateTextHeader (newDate) {
    props.dispatchUpdateTextHeader(newDate)
  }

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

// function loadData (customer) {
//   // wait for both retrieves to finish when server side renderings
//   const prom1 = customer.dispatch(customersFetchData())
//   return Promise.all([prom1])
// }

// export default {
//   component: connect(mapStateToProps, customersFetchData)(Calendar),
//   loadData
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching plain actions
//     //   AddCustomer: customer => dispatch(AddCustomer(customer)),
//     //   UpdateCustomer: customer => dispatch(updateCustomer(customer))
//   }
// }

export default {
  component: connect(mapStateToProps, {
    dispatchUpdateTextFooter,
    dispatchUpdateTextHeader
  })(Calendar)
}
