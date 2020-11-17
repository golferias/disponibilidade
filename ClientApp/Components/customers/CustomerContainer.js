import React from 'react'
import CustomerHeaderTitle from './CustomerHeaderTitle'

export default function CustomerContainer (props) {
  return (
    <div className='container-main events'>
      <div className='row'>
        <div className='col-12'>
          <CustomerHeaderTitle />
          {/* <HomeSessionFilter/>
                    <HomeFilterView/>
                    <HomeSessions sessions={props.sessions}/> */}
        </div>
      </div>
    </div>
  )
}
