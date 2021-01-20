import React from 'react'
import DateInput from '../common/DateInput'
import MultiSelectDrop from '../common/MultiSelectDrop'

function getCustomer (customerList, id) {
  if (!id) {
    return []
  }
  return customerList.filter(x => x.id == id)
}

function getServices (serviceList, ids) {
  return serviceList.filter(item => ids.includes(item.id))
}

function BookingForm (props) {
  const customerSelected = getCustomer(props.customers, props.booking.idcliente)
  const servicesSelected = getServices(props.services, props.booking.services)
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
      <MultiSelectDrop
        selectedValue={customerSelected}
        placeholder={'Selecionar Cliente '}
        label='Cliente'
        options={props.customers}
        singleSelect={true}
        displayValue={'name'}
      ></MultiSelectDrop>
      <MultiSelectDrop
        selectedValue={servicesSelected}
        placeholder={'Selecionar Servico'}
        label='Servicos'
        options={props.services}
        singleSelect={false}
        displayValue={'name'}
      ></MultiSelectDrop>
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
