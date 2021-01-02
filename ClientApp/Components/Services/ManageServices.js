import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import ServiceForm from './ServiceForm'
import { Add, Update } from '.././../../redux/actions/services'

export const ManageServicesPage = props => {
    const [errors, setErrors] = useState({})
    const [row, setRow] = useState({
      id: null,
      name: ''      
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
              props.history.push('/services')
            })
            .catch(() => {
              console.log('error on action')
            })
        } else {
          const prom1 = props.Update(row)
          Promise.all([prom1])
            .then(() => {
              props.history.push('/services')
            })
            .catch(() => {
              console.log('error on action')
            })
        }
      }

      function formIsValid () {
        const _errors = {}
        if (!row.name) _errors.name = 'Nome obrigat\u00F3rio'
    
        setErrors(_errors)
        return Object.keys(_errors).length === 0
      }

      useEffect(() => {
        const id = props.match.params.id
    
        if (id) {
          var filteredArray = props.services.data.filter(
            item => item.id.toString() === id.toString()
          )
            
          setRow(filteredArray[0])
        }
        return
      }, [props.match.params.id]) 

      return (
        <ServiceForm
          service={row}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
        />
      )

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
      services: state.services
    }
  }

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(ManageServicesPage)
  }