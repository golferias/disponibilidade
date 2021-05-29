import React, { Component } from 'react'
import AcompanhamentoRec from '../Acompanhamento/AcompanhamentoRec'

class HomeAcompanhamento extends Component {
  render () {
    let allBooking = this.props.booking

    let servicesTolookup = this.props.services.filter(
      x => x.diasAcompanhamento > 0
    )

    function filterByID (booking) {
      if (booking.services.length < 2) {
        let a = servicesTolookup.map(x=> x.id).includes(booking.services[0])
        return a;
      } else {
        booking.services.forEach(bservice => {
          if (servicesTolookup.map(x=> x.id).includes(bservice)) {
            return true
          }
        })
        return false
      }
    }

    let orderedBooking = allBooking.filter(filterByID)

    if (this.props.booking.length > 0) {
      orderedBooking = orderedBooking.sort(function (b1, b2) {
        return new Date(b1.date) - new Date(b2.date)
      })
    }

    const itemComponents = orderedBooking.map(Rec => {
      return (
        <AcompanhamentoRec
          showData={true}
          key={Rec.id}
          book={Rec}
          customers={this.props.customers}
          services={this.props.services}
        />
      )
    })

    return (
      <div className='events-customers-list container-fluid js-list-view active'>
        {itemComponents.length ? (
          itemComponents
        ) : (
          <div className='emptyList'>
            <p>Não existem marcacoes superiores a data escolhida 30 dias</p>
          </div>
        )}
      </div>
    )
  }
}

export default HomeAcompanhamento
