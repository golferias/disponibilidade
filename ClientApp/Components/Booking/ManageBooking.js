import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Form from './BookingForm'
import { Add, Update } from '.././../../redux/actions/services'
import Loading from '../common/Loading'

export const ManageBooking = props => {
    const [errors, setErrors] = useState({})
    const [row, setRow] = useState({
      id: null,
      start: ''
    })

    function handleChange ({ target }) {
        const updatedRow = { ...row, [target.name]: target.value }
        setRow(updatedRow)
      }
    
      function handleSubmit (event) {
        event.preventDefault()
        if (!formIsValid()) return
        if (!row.id) {
          const prom1 = props.Add(row)
          Promise.all([prom1])
            .then(() => {
              props.history.push('/booking')
            })
            .catch(() => {
              console.log('error on action')
            })
        } else {
          const prom1 = props.Update(row)
          Promise.all([prom1])
            .then(() => {
              props.history.push('/booking')
            })
            .catch(() => {
              console.log('error on action')
            })
        }
      }
    
      function formIsValid () {
        const _errors = {}
        if (!row.start) _errors.start = 'Nome obrigat\u00F3rio'
    
        setErrors(_errors)
        return Object.keys(_errors).length === 0
      }

useEffect(() => {
    const id = props.match.params.id

    if (id) {
      var filteredArray = props.booking.data.filter(
        item => item.id.toString() === id.toString()
      )

      setRow(filteredArray[0])
    }
    return
  }, [props.match.params.id])
  let showHtml
  if (props.isLoading) {
    showHtml = <Loading title='A Gravar marcacao...' />
  } else {
    showHtml = (
      <Form
        booking={row}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    )
  }

  return <div>{showHtml}</div>
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      Add: row => dispatch(Add(row)),
      Update: row => dispatch(Update(row))
    }
  }
  
  function mapStateToProps (state) {
    return {
      booking: state.booking,
      isLoading: state.services.isLoading
    }
  }

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(ManageBooking)
}