import React from 'react'
import TextInput from '../common/TextInput'
import { PropTypes } from 'prop-types'

function CustomerForm (props) {
  let DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' }
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
        value={props.customer.phone.toString()}
        onChange={props.onChange}
        error={props.errors.phone}
        
      />
      <TextInput
        id='birth'
        label='Data de Nascimento'
        name='birth'
        //value={new Date().toLocaleDateString('pt-PT', DATE_OPTIONS)}
        value={props.customer.birth}
        onChange={props.onChange}
        error={props.errors.birth}
        placeholder='aaaa-mm-dd'
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
