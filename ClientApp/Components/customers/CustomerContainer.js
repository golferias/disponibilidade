import React from 'react'
import CustomerHeaderTitle from './CustomerHeaderTitle'
import HomeCustomers  from "./HomeCustomers";

export default function CustomerContainer (props) {
  return (
    <div className='container-main events'>
      <div className='row'>
        <div className='col-12'>
          <CustomerHeaderTitle />
          {/* <HomeSessionFilter/>
                    <HomeFilterView/>*/}
                    <HomeCustomers customers={props.customers}/> 
        </div>
      </div>
    </div>
  )
}
