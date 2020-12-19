import React from 'react'
import HeaderTitle from '../common/HeaderTitle'
import Home from './HomeBooking'
import { Link } from 'react-router-dom'

export default function BookingContainer (props) {
  return (
    <div className='container-main'>
      <div className='row'>
        <div className='col-12'>
          <HeaderTitle title='marcacoes' />
          <div className='customers-title'>
            <div className='filter-bar__more-filters col-12 d-flex align-items-center'>
              <span className='square-icon square-icon--primary '>
                <i className='fa fa-plus' aria-hidden='true' />
              </span>
              <Link className='filter-bar__more-filters__label' to='/booking'>
                Adicionar Marcacao
              </Link>
            </div>
          </div>
          <Home
            customers={props.customers}
            booking={props.booking}
            delete={book => {
              return props.delete(book)
            }}
          />
        </div>
      </div>
    </div>
  )
}
