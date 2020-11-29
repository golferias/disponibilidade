import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import { connect } from 'react-redux'
import { AddCustomer } from '.././../../redux/actions/customers'

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

    props.AddCustomer(customer)
    props.history.push('/')
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
    //  courseStore.addChangeListener(onChange)
    // const slug = props.match.params.slug
    // if (courses.length === 0) {
    //   // courseActions.loadCourses()
    // } else if (slug) {
    //   // setCourse(courseStore.getCourseBySlug(slug))
    // }
    //   return () => courseStore.removeChangeListener(onChange)
    // }, [courses.length, props.match.params.slug])
    return
  }, [])

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
  console.log('ManageCustomers.js CUSTOMER_UPDATE....')
  return {
    // dispatching plain actions
    AddCustomer: customer => dispatch(AddCustomer(customer))
  }
}

export default {
  component: connect(null, mapDispatchToProps)(ManageCustomerPage)
}
