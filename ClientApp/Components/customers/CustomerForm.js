import React from 'react'
import TextInput from '../common/TextInput'
import { PropTypes } from 'prop-types'

function CustomerForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id='name'
        label='Nome'
        name='name'
        value={props.customer.name}
        onChange={props.onChange}
        error={props.errors.name}
      />
      <TextInput
        id='email'
        label='Email'
        name='email'
        value={props.customer.email}
        onChange={props.onChange}
        error={props.errors.email}
      />

      <TextInput
        id='phone'
        label='Telemóvel'
        name='phone'
        value={props.customer.phone}
        onChange={props.onChange}
        error={props.errors.phone}
      />

      <input
        type='submit'
        value='Salvar'
        className='btn btn-primary btn-customer'
      />
    </form>
  )
}

CustomerForm.propTypes = {
  customer: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default CustomerForm
