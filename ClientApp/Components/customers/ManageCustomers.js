import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'

export const ManageCustomerPage = props => {
  const [errors, setErrors] = useState({})
  const [courses, setCourses] = useState([])
  const [customer, setCourse] = useState({
    Id: null,
    Name: '',
    Email: '',
    Phone: ''
  })

  function handleChange ({ target }) {
    //   const updatedCourse = { ...course, [target.name]: target.value }
    //   setCourse(updatedCourse)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (!formIsValid()) return
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
    const slug = props.match.params.slug
    if (courses.length === 0) {
      // courseActions.loadCourses()
    } else if (slug) {
      // setCourse(courseStore.getCourseBySlug(slug))
    }
    return () => courseStore.removeChangeListener(onChange)
  }, [courses.length, props.match.params.slug])

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

export default {
  component: ManageCustomerPage
}
