import React, { Component } from 'react'
import CustomerContainer from './CustomerContainer'
import { connect } from 'react-redux'
import { customersFetchData } from '.././../../redux/actions/customers'

class Customers extends Component {
  componentDidMount () {
    this.props.customersFetchData()
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
          <h1>Falha ao ler os dados:{this.props.errorMessage}</h1>
        </div>
      )
    } else {
      return (
        <div>
          {/* <HomeHeader /> */}
          <CustomerContainer
            customers={this.props.customers}
            // updateSession={(rec) => {
            //     this.props.updateSession(rec);
            // }}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers.data,
    hasErrored: state.customers.hasErrored,
    isLoading: state.customers.isLoading,
    errorMessage: state.customers.errorMessage
  }
}

function loadData (customer) {
  // wait for both retrieves to finish when server side renderings
  const prom1 = customer.dispatch(customersFetchData())
  return Promise.all([prom1])
}

export default {
  component: connect(mapStateToProps, { customersFetchData })(Customers),
  loadData
}
