import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Form from './BookingForm'
import { Add, updateBooking } from '.././../../redux/actions/booking'
import Loading from '../common/Loading'
import {
  dispatchUpdateTextHeader,
  dispatchUpdateTextFooter
} from '.././../../redux/actions/calendar'

export const ManageBooking = props => {
  const [errors, setErrors] = useState({})
  const [row, setRow] = useState({
    id: null,
    start: new Date().toISOString(),
    customerId: '',
    services: [],
    end: new Date().toISOString()
  })
  const months = [
    'Janeiro',
    'Fevereiro',
    'Marco',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  function handleChange (e) {
    let newDate = new Date(row.start)
    newDate.setHours(e.target.value.substring(0, 2))
    newDate.setMinutes(e.target.value.substring(3, 5))

    const updatedRow = { ...row, [e.target.name]: newDate }
    setRow(updatedRow)
  }

  function onSelectCustomer (e) {
    const updatedRow = { ...row, customerId: e[0].id }
    setRow(updatedRow)
  }

  function onSelectService (e) {
    let result = e.map(a => a.id)
    const updatedRow = { ...row, services: result }
    setRow(updatedRow)
  }

  function updateStateDates (newDate) {
    let startDate = new Date(newDate)
    let endDate = new Date(newDate)
    const start = new Date(row.start)
    const end = new Date(row.end)

    startDate.setHours(start.getHours())
    startDate.setMinutes(start.getMinutes())

    endDate.setHours(end.getHours())
    endDate.setMinutes(end.getMinutes())

    let updatedRow = { ...row, start: startDate, end: endDate }

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
    if (!row.customerId) _errors.customerId = 'Cliente obrigat\u00F3rio'
    if (row.services.length == 0) _errors.services = 'Servico obrigat\u00F3rio'

    if (!row.start) _errors.start = 'Hora de inicio obrigat\u00F3rio'
    if (!row.end) _errors.end = 'Hora de fim obrigat\u00F3rio'

    //Validate start time with end time
    let dateStart = new Date(row.start)
    let dateEnd = new Date(row.end)
    if (dateEnd <= dateStart) {
      _errors.end = 'Hora de fim nao pode ser menor ou igual a hora de inicio'
    }

    let bookingSameDay = []
    props.booking.data.forEach(b => {
      let bDate = new Date(b.start).toISOString().split('T')[0]
      let currentDate = new Date(dateStart).toISOString().split('T')[0]
      if (bDate == currentDate && b.id != row.id) {
        let bookingStart = new Date(b.start)
        //let bookingEnd = new Date(b.end)

        let bEnd = new Date(b.end)
        let bookingEnd15minutes = new Date(bEnd.getTime() - 15 * 60 * 1000)
        let bookingStart15minutes = new Date(
          bookingStart.getTime() + 15 * 60 * 1000
        )
        if (
          dateStart < bookingStart &&
          dateEnd > bookingStart &&
          dateEnd < bEnd &&
          dateEnd > bookingStart15minutes
        ) {
          bookingSameDay.push(b)
        }
        if (
          dateStart >= bookingStart15minutes &&
          dateEnd <= bookingEnd15minutes
        ) {
          bookingSameDay.push(b)
        }
        if (dateStart <= bookingStart && dateEnd >= bookingEnd15minutes) {
          bookingSameDay.push(b)
        }
        if (dateStart >= bookingStart15minutes && dateEnd >= bEnd) {
          bookingSameDay.push(b)
        }
      }
    })

    if (bookingSameDay.length > 0) {
      const customer = props.customers.filter(
        x => x.id == bookingSameDay[0].customerId
      )[0]
      const currentDate = new Date(bookingSameDay[0].start)
      _errors.end =
        'Existe uma marcacao das ' +
        new Date(bookingSameDay[0].start)
          .toISOString()
          .split('T')[1]
          .substring(0, 5) +
        ' as ' +
        new Date(bookingSameDay[0].end)
          .toISOString()
          .split('T')[1]
          .substring(0, 5) +
        ' para o cliente ' +
        customer.name +
        ' neste dia ' +
        currentDate.getDate().toString() +
        ' de ' +
        months[currentDate.getMonth()]
    }

    setErrors(_errors)
    return Object.keys(_errors).length === 0
  }

  useEffect(() => {
    const id = props.match.params.id

    if (id) {
      let filteredArray = props.booking.data.filter(
        item => item.id.toString() === id.toString()
      )

      setRow(filteredArray[0])
    } else {
      const defaultDate = new Date()
      let defaultEndDate = new Date(defaultDate.getTime() + 1 * 60 * 60 * 1000)

      let row = {
        id: null,
        start: defaultDate.toISOString(),
        customerId: '',
        services: [],
        end: defaultEndDate.toISOString()
      }
      setRow(row)
    }
    return
  }, [props.match.params.id])

  let showHtml
  if (props.isLoading) {
    showHtml = <Loading title='A Gravar marcacao...' />
  } else {
    showHtml = (
      <div className='container-main'>
        <div className='row'>
          <div className='col-12'>
            <Form
              dispatchUpdateTextHeader={newDate => {
                props.dispatchUpdateTextHeader(newDate)
                //  updateStateDates(newDate)
              }}
              dispatchUpdateTextFooter={newDate => {
                props.dispatchUpdateTextFooter(newDate)
                updateStateDates(newDate)
              }}
              textfooter={props.textfooter}
              textheader={props.textheader}
              customers={props.customers}
              services={props.services}
              booking={row}
              onSelectService={onSelectService}
              onSelectCustomer={onSelectCustomer}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errors={errors}
            />
          </div>
        </div>
      </div>
    )
  }

  return <div>{showHtml}</div>
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Add: row => dispatch(Add(row)),
    Update: row => dispatch(updateBooking(row)),
    dispatchUpdateTextHeader: newDate =>
      dispatch(dispatchUpdateTextHeader(newDate)),
    dispatchUpdateTextFooter: newDate =>
      dispatch(dispatchUpdateTextFooter(newDate))
  }
}

function mapStateToProps (state) {
  return {
    textfooter: state.calendar.textfooter,
    textheader: state.calendar.textheader,
    services: state.services.data,
    customers: state.customers.data,
    booking: state.booking,
    isLoading: state.booking.isLoading
  }
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(ManageBooking)
}