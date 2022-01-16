import React, { Component } from 'react'
import HeaderTitle from '../common/HeaderTitle'
// import Home from './HomeCalendar'
import HomeTableCalendar from './HomeTableCalendar'

import { HeaderCalendar } from './HeaderCalendar'
import { HeaderTextCalendar } from './HeaderTextCalendar'
// import { FooterCalendar } from './FooterCalendar'
// import Add from '../common/Add'
import LoadingCalendar from '../common/LoadingCalendar'

class CalendarContainer extends Component {
  render () {
    return (
      <div className='container-main'>
        <div className='row'>
          <div className='col-12'>
            <HeaderTitle />
            {/* <Add title='Marcacao' linkto='/addbooking/' /> */}
            <div>
              <HeaderTextCalendar textheader={this.props.textheader} />
            </div>
            <div>
              <HeaderCalendar
                calendar={this.props.calendar}
                dispatchUpdateFilterList={newDate => {
                  this.props.dispatchUpdateFilterList(newDate)
                }}
                dispatchUpdateTextFooter={newDate => {
                  this.props.dispatchUpdateTextFooter(newDate)
                }}
                dispatchUpdateTextHeader={newDate => {
                  this.props.dispatchUpdateTextHeader(newDate)
                }}
              />
            </div>
            <HomeTableCalendar
                isLoadingCalendar={this.props.isLoadingCalendar}
                booking={this.props.booking}
              />
            {/* {this.props.isLoadingCalendar ? (
              <LoadingCalendar title='a carregar o calendario...' />
            ) : (
              <HomeTableCalendar
                isLoadingCalendar={this.props.isLoadingCalendar}
                booking={this.props.booking}
              />
            )} */}
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarContainer

// export default function CalendarContainer (props) {
//   return (
//     <div className='container-main'>
//       <div className='row'>
//         <div className='col-12'>
//           <HeaderTitle />
//           {/* <Add title='Marcacao' linkto='/addbooking/' /> */}
//           <div>
//             <HeaderTextCalendar textheader={props.textheader} />
//           </div>
//           <div>
//             <HeaderCalendar
//               calendar={props.calendar}
//               dispatchUpdateFilterList={newDate => {
//                 props.dispatchUpdateFilterList(newDate)
//               }}
//               dispatchUpdateTextFooter={newDate => {
//                 props.dispatchUpdateTextFooter(newDate)
//               }}
//               dispatchUpdateTextHeader={newDate => {
//                 props.dispatchUpdateTextHeader(newDate)
//               }}
//             />
//           </div>
//           {/* <div className='calendar-headertextfooter'>
//               <FooterCalendar textfooter={props.textfooter} />
//             </div> */}
//           {/* <Home
//             services={props.services}
//             customers={props.customers}
//             booking={props.booking}
//             delete={book => {
//               return props.delete(book)
//             }}
//           /> */}
//           <HomeTableCalendar booking={props.booking} />
//         </div>
//       </div>
//     </div>
//   )
// }
