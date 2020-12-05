import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import { connect } from 'react-redux'
import { AddCustomer, updateCustomer } from '.././../../redux/actions/customers'

export const ManageCustomerPage = props => {
  const [errors, setErrors] = useState({})
  const [customer, setCustomer] = useState({
    id: null,
    Name: '',
    Email: '',
    Phone: ''
  })

  function handleChange ({ target }) {
    const updatedCustomer = { ...customer, [target.name]: target.value }
    setCustomer(updatedCustomer)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (!formIsValid()) return
    if (!customer.id) {
      const prom1 = props.AddCustomer(customer)
      Promise.all([prom1])
        .then(() => {
          props.history.push('/')
        })
        .catch(() => {
          console.log('error on action')
        })
    } else {
      const prom1 = props.UpdateCustomer(customer)
      Promise.all([prom1])
        .then(() => {
          props.history.push('/')
        })
        .catch(() => {
          console.log('error on action')
        })
    }
  }

  function formIsValid () {
    const _errors = {}
    if (!customer.Name) _errors.Name = 'Nome obrigatorio'

    if (customer.Email) {
      if (
        !customer.Email.match(
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      )
        _errors.Email = 'Email inválido'
    }
    if (customer.Phone) {
      if (!customer.Phone.match(/^[0-9]{9}$/))
        _errors.Phone = 'Telemóvel inválido'
    }
    //[\d+]
    setErrors(_errors)
    return Object.keys(_errors).length === 0
  }

  useEffect(() => {
    const id = props.match.params.id

    if (id) {
      var filteredArray = props.customers.data.filter(item => item.id === id)
      setCustomer(filteredArray[0])
    }
    return
  }, [props.match.params.id])

  return (
    <CustomerForm
      customer={customer}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
    />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    AddCustomer: customer => dispatch(AddCustomer(customer)),
    UpdateCustomer: customer => dispatch(updateCustomer(customer))
  }
}

function mapStateToProps (state) {
  return {
    customers: state.customers
  }
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage)
}
