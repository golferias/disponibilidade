import React from 'react'
import MultiSelectDrop from '../common/MultiSelectDrop'
import DateInput from '../common/DateInput'
import { HeaderCalendar } from '../Calendar/HeaderCalendar'
import { HeaderTextCalendar } from '../Calendar/HeaderTextCalendar'
import { FooterCalendar } from '../Calendar/FooterCalendar'

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
  const customerSelected = getCustomer(
    props.customers,
    props.booking.customerId
  )
  const servicesSelected = getServices(props.services, props.booking.services)

  function handleClick (e) {
    e.preventDefault()
    props.onChange(e)
  }

  function onSelectCustomer (e) {
    props.onSelectCustomer(e)
  }

  function onSelectService (e) {
    props.onSelectService(e)
  }

  return (
    <form onSubmit={props.onSubmit}>
      <MultiSelectDrop
        onSelect={onSelectCustomer}
        selectedValue={customerSelected}
        placeholder={'Selecionar Cliente '}
        label='Cliente'
        options={props.customers}
        singleSelect={true}
        displayValue={'name'}
        error={props.errors.customerId}
      ></MultiSelectDrop>
      <MultiSelectDrop
        error={props.errors.services}
        onRemove={onSelectService}
        onSelect={onSelectService}
        selectedValue={servicesSelected}
        placeholder={'Selecionar Servico'}
        label='Servicos'
        options={props.services}
        singleSelect={false}
        displayValue={'name'}
      ></MultiSelectDrop>
      <div className='form-group'>
        <label className='multiselectlabel' htmlFor={props.displayValue}>
          Data
        </label>
        <div>
          <HeaderTextCalendar
            className='headertextcalendar'
            textheader={props.textheader}
          />
        </div>
        <div>
          <HeaderCalendar
            selectedDay={props.booking.start}
            //calendar={props.calendar}
            dispatchUpdateTextFooter={newDate => {
              props.dispatchUpdateTextFooter(newDate)
            }}
            dispatchUpdateTextHeader={newDate => {
              props.dispatchUpdateTextHeader(newDate)
            }}
          />
        </div>
        <div className='calendar-headertextfooter'>
          <FooterCalendar textfooter={props.textfooter} />
        </div>
        <div>
          <DateInput
            id='start'
            label='Inicio'
            name='start'
            value={props.booking.start}
            onChange={handleClick}
            error={props.errors.start}
            showDate='0'
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
      </div>
      <input
        type='submit'
        value='Salvar'
        className='btn btn-primary btn-customer'
      />
    </form>
  )
}

export default BookingForm
