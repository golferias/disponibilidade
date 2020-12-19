import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toStringDate } from '../common/ToStringComponent'

export default class BookingRec extends Component {
  render () {
    function getCustomerName (customerList, id) {
      const customer = customerList.filter(x => x.id == id)
      return customer[0].name
    }
    const optionsMarcacao = { weekday: 'long', month: 'long', day: 'numeric' }
    const optionsStartEnd = { hour: 'numeric', minute: 'numeric' }
    let dataMarcacao = new Date(this.props.book.start)
    let dataStart = new Date(this.props.book.start)
    let dataEnd = new Date(this.props.book.end)
    const customerName = getCustomerName(
      this.props.customers,
      this.props.book.idcliente
    )

    return (
      <div className='events-customers-list__item row'>
        <div className='item col-12 col-sm-6 col-md-5 '>
          <div className='customer-title'>
            {dataMarcacao.toLocaleDateString('pt-PT', optionsMarcacao)}
          </div>
          <div className='customer-details'>
            &nbsp;&nbsp; Cliente: {customerName}
          </div>
          <div className='customer-details'>
            &nbsp;&nbsp; Servico: {this.props.book.idservico}
          </div>
          <div className='customer-details'>
            &nbsp;&nbsp; Inicio:{' '}
            <b>{dataStart.toLocaleTimeString('pt-PT', optionsStartEnd)}</b> Fim:{' '}
            <b>{dataEnd.toLocaleTimeString('pt-PT', optionsStartEnd)}</b>
          </div>
          <div>
            <button
              className='btn btn-outline-danger customerRec'
              onClick={() => this.props.delete(this.props.book)}
            >
              Apagar
            </button>
            <Link
              to={{
                pathname: '/booking/' + this.props.book.id,
                param1: this.props.book.id
              }}
            >
              <button className='btn btn-outline-primary customerRec'>
                Editar
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
