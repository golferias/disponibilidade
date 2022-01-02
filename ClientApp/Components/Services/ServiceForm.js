import React from 'react'
import TextInput from '../common/TextInput'

function ServiceForm (props) {
    return (
        <form onSubmit={props.onSubmit}>
          <TextInput
            id='name'
            label='Nome'
            name='name'
            value={props.service.name}
            onChange={props.onChange}
            error={props.errors.name}
          />
          {/* <TextInput
            id='diasAcompanhamento'
            label='Dias para acompanhamento'
            name='diasAcompanhamento'
            value={props.service.diasAcompanhamento}
            onChange={props.onChange}
            error={props.errors.diasAcompanhamento}
          /> */}
         
          <input
            type='submit'
            value='Salvar'
            className='btn btn-primary btn-customer'
          />
        </form>
      )


}

export default ServiceForm