import React from 'react'
import TextInput from '../common/TextInput'

function BookingForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id='start'
        label='Data'
        name='start'
        value={props.booking.start}
        onChange={props.onChange}
        error={props.errors.start}
      />

      <input
        type='submit'
        value='Salvar'
        className='btn btn-primary btn-customer'
      />
    </form>
  )
}

export default BookingForm
