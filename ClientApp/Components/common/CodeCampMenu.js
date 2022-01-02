import React from 'react'
import { Link } from 'react-router-dom'

export default function CodeCampMenu () {
  //const [lastPath, setLastPath] = React.useState('/')
  const [isVisible, setIsVisible] = React.useState(false)
  const [cssProperties, setCSS] = React.useState({
    '--transform': 'translateY(-100%)'
  })

  const handleClick = e => {
    e.preventDefault()
    if (!isVisible) {
      setCSS({ '--transform': 'translateY(0%)' })
    } else {
      setCSS({ '--transform': 'translateY(-100%)' })
    }
    setIsVisible(!isVisible)
  }

  const setCssVisibility = e => {
    if (!isVisible) {
      setCSS({ '--transform': 'translateY(0%)' })
    } else {
      setCSS({ '--transform': 'translateY(-100%)' })
    }
    //  setLastPath(path);
    setIsVisible(!isVisible)
  }
  return (
    <div className='main-menu'>
      <div onClick={handleClick} className='header__open-button-mobile'>
        <a href='' className='js-open-main-menu'>
          <i className='fa fa-bars' />
        </a>
      </div>
     <ul className='header__menu-list js-menu' style={cssProperties}>
        <li className='close-button-mobile snow-bg'>
          <a onClick={setCssVisibility} className='js-close-main-menu'>
            <i className='fa fa-remove' />
          </a>
        </li>
        <li className="snow-bg">
          <Link to='/customers' onClick={setCssVisibility}>
            Clientes
          </Link>
        </li>
        <li  className="snow-bg">
          <Link to='/services' onClick={setCssVisibility}>
            Servicos
          </Link>
        </li>

        {/* <li className="snow-bg">
          <Link to='/Home' onClick={setCssVisibility}>
            Produtos
          </Link>
        </li> */}
        <li className="snow-bg">
          <Link to='/booking' onClick={setCssVisibility}>
            Marcacoes
          </Link>
        </li>
        <li className="snow-bg">
          <Link to='/calendar' onClick={setCssVisibility}>
            Calendario
          </Link>
        </li>
        {/* <li className="snow-bg">
          <Link to='/aniversarios' onClick={setCssVisibility}>
            Parabens
          </Link>
        </li> */}
        {/* <li className="snow-bg">
          <Link to='/analise' onClick={setCssVisibility}>
            Analise
          </Link>
        </li>
        <li className="snow-bg">
          <Link to='/acompanhamento' onClick={setCssVisibility}>
            Acompanhamento
          </Link>
        </li> */}
        <li className='social-icon snow-bg'>
          <a href='https://www.google.pt/localservices/profile?g2lb=4655480,4684026,4676222&hl=pt-PT&gl=pt&ssta=1&scp=EjASEglV2nLDRPokDRFgNDwOwesAHCIENDgwNSoUDacnqxgVnc_4-h13_sIYJUFaEfsaEGZpbGlwZSBiYXJiZWFyaWEiEGZpbGlwZSBiYXJiZWFyaWEwAQ%3D%3D&spp=Cg0vZy8xMWc2eHdmcXBk&src=2&q=Filipe+Barbearia+Ermesinde&serexp=1&sa=X&ved=2ahUKEwj7oa6QkpT1AhWKz4UKHcnYBjwQkbkFegQIAhAk&lrlstt=1641163419172'>
            <i className='fa fa-facebook' aria-hidden='true'></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
