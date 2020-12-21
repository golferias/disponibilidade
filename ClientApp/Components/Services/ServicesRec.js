import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {toStringDate} from '../common/ToStringComponent'

export default class ServicesRec extends Component {
  render () {
    return (
      <div className='events-customers-list__item row'>
        <div className='item col-12 col-sm-6 col-md-5 '>
          <div className='customer-title'>{this.props.service.name}</div>
          <div>
            <button
              className='btn btn-outline-danger customerRec'
              onClick={() => this.props.delete(this.props.service)}
            >
              Apagar
            </button>
            <Link
              to={{
                pathname: '/services/' + this.props.service.id,
                param1: this.props.service.id
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
