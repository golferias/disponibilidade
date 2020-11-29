import React from 'react'
import TextInput from '../common/TextInput'
import { PropTypes } from 'prop-types'

function CustomerForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id='Name'
        label='Nome'
        name='Name'
        value={props.customer.Name}
        onChange={props.onChange}
        error={props.errors.Name}
      />
      <TextInput
        id='Email'
        label='Email'
        name='Email'
        value={props.customer.Email}
        onChange={props.onChange}
      />

      <TextInput
        id='Phone'
        label='Telemovel'
        name='Phone'
        value={props.customer.Phone}
        onChange={props.onChange}
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
