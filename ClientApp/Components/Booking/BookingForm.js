import React from 'react'
import TextInput from '../common/TextInput'
import DateInput from '../common/DateInput'


function getCustomerName (customerList, id) {
  if (!id) {
    return ''
  }
  const customer = customerList.filter(x => x.id == id)
  return customer[0].name
}

function getServiceName (serviceList, ids) {
  const services = serviceList.filter(item => ids.includes(item.id))

  let names = ''
  services.forEach(element => {
    names = names + element.name + ', '
  })

  return names.slice(0, -2)
}

function BookingForm (props) {
  const customerName = getCustomerName(props.customers, props.booking.idcliente)
  const serviceName = getServiceName(
    props.services,
    props.booking.services
  )

  let showHtml
  if (!props.states.editingData) {
    showHtml = <div></div>
  } else {
    showHtml = (
      <div>
      <DateInput
        id='start'
        label='Inicio'
        name='start'
        value={props.booking.start}
        onChange={props.onChange}
        error={props.errors.start}
        showDate='1'
      />
      <DateInput
        id='end'
        label='Fim'
        name='end'
        value={props.booking.end}
        onChange={props.onChange}
        error={props.errors.end}
        showDate='0'
      />
      </div>
    )
  }

  return (
    <form onSubmit={props.onSubmit}>
      {/* <DateTimePicker
        // onChange={props.onChange}
        // value={props.booking.start}
      /> */}
      <TextInput
        id='name'
        label='Cliente'
        name='name'
        value={customerName}
        onChange={props.onChange}
        error={props.errors.name}
      />
      <TextInput
        id='services'
        label='Servicos'
        name='services'
        value={serviceName}
        onChange={props.onChange}
        error={props.errors.services}
      />
      {showHtml}
      <button
        className='btn btn-outline-primary customerRec'
        onClick={props.onDataStateClick}
      >
        Editar Data
      </button>

      <input
        type='submit'
        value='Salvar'
        className='btn btn-primary btn-customer'
      />
    </form>
  )
}

export default BookingForm
