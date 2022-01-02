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
          <a href='https://www.google.pt/search?q=filipe%20barbearia&sxsrf=AOaemvJ6VQfdmpjycvGkCEvDeEPp8Xl5CA:1641091683699&source=hp&ei=XhLRYeuoLc6SlwSC4oa4DA&iflsig=ALs-wAMAAAAAYdEgbiIM6OouwAp77zRLOEplMgbD2Cjh&ved=2ahUKEwipzOb2hpL1AhUZg_0HHT54ADoQvS56BAgMEEI&uact=5&oq=filipe+barbearia&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgIIJjICCCY6BAgjECc6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6CAguELEDEIMBOgsIABCABBCxAxCDAToICC4QgAQQsQM6BAgAEAM6CwguEIAEEMcBEK8BOgUILhCABDoHCC4QgAQQCjoKCC4QsQMQgwEQCjoFCAAQywFQAFiUFmCmF2gAcAB4AIABW4gBrAqSAQIxNpgBAKABAQ&sclient=gws-wiz&tbs=lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=13214365841033416832&lqi=ChBmaWxpcGUgYmFyYmVhcmlhWhIiEGZpbGlwZSBiYXJiZWFyaWGSAQtiYXJiZXJfc2hvcA&rlst=f#rlfi=hd:;si:13214365841033416832,l,ChBmaWxpcGUgYmFyYmVhcmlhWhIiEGZpbGlwZSBiYXJiZWFyaWGSAQtiYXJiZXJfc2hvcA;mv:[[41.6467251,-8.2216376],[38.603578999999996,-9.289283]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14'>
            <i className='fa fa-facebook' aria-hidden='true'></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
