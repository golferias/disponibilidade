import React from 'react'
import CustomerHeaderTitle from './CustomerHeaderTitle'
import HomeCustomers from './HomeCustomers'

export default function CustomerContainer (props) {
  return (
    <div className='container-main'>
      <div className='row'>
        <div className='col-12'>
          <CustomerHeaderTitle />
          <div className='customers-title'>
            <div className='filter-bar__more-filters col-12 col-md-3 d-flex align-items-center'>
              <span className='square-icon square-icon--primary '>
                <i className='fa fa-plus' aria-hidden='true' />
              </span>
              <span className='filter-bar__more-filters__label'>
                Adicionar Clientes
              </span>
            </div>
          </div>
          {/* <HomeSessionFilter/>
                    <HomeFilterView/>*/}
          <HomeCustomers customers={props.customers} />
        </div>
      </div>
    </div>
  )
}
