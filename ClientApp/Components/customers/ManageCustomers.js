import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import { connect } from 'react-redux'
import { updateCustomer } from '.././../../redux/actions/customers'

export const ManageCustomerPage = props => {
  const [errors, setErrors] = useState({})
  const [customer, setCustomer] = useState({
    Id: null,
    Name: 'a',
    Email: 'b',
    Phone: '1'
  })

  function handleChange ({ target }) {
    const updatedCustomer = { ...customer, [target.name]: target.value }
    setCustomer(updatedCustomer)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (!formIsValid()) return
    props.update(customer);
    //this.props.updateCustomer(customer)
    //props.customer.props.dispatch({type:'CUSTOMER_UPDATE'})
    //  props.updateCustomer(customer).then(() => {
    //   props.history.push('/')
    //  })
    // courseActions.saveCourse(course).then(() => {
    //   props.history.push('/courses')
    // //   toast.success('Customer Saved.', {
    // //     position: 'top-right',
    // //     autoClose: 5000,
    // //     hideProgressBar: false,
    // //     closeOnClick: true,
    // //     pauseOnHover: true,
    // //     draggable: true,
    // //     progress: undefined
    // //   })
    // })
  }

  function formIsValid () {
    const _errors = {}
    if (!customer.Name) _errors.Name = 'Nome obrigatorio'
    // if (!customer.Email) _errors.Email = 'Email'
    // if (!customer.Phone) _errors.Phone = 'Telemovel'

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
  
  function onChange () {
    // setCourses(courseStore.getCoursesFromStore())
  }

  return (
    <CustomerForm
      customer={customer}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
    />
  )
}

//export default connect(null)(ManageCustomerPage)
// export default {
//   component: ManageCustomerPage
// }
const mapDispatchToProps = (dispatch, customer) => {
  console.log('ManageCustomers.js CUSTOMER_UPDATE....')
  return {
    // dispatching plain actions
    update: customer => props.customer.updateCustomer(customer)
  }
}

export default {
  component: connect(null,mapDispatchToProps)(ManageCustomerPage)
}
