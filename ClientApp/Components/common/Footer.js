import React, {  useState } from 'react'


export default function Footer () {
  
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollHeight;
    if (scrolled > 820){
      setVisible(true)
    } 
    else if (scrolled <= 820){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  // window.addEventListener('scroll', toggleVisible);
  window.addEventListener('click', toggleVisible);

  return (
    <footer className='footer'>
      <div className='container-main'>
        <div className='footer__menu' />
        <div className='footer__disclaimer'>
        <a href="#" id="toTopBtn" class="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out" data-abc="true" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        </a>
          <p>Versao: 1</p>
          <p>
            Desenvolvido por <strong>Pedro Costa</strong>
          </p>
        </div>       
      </div>
    </footer>
  )
}

 {/* <a href="#" class="o-scroll-up static" title="back to top">
          <span class="o-scroll-up-text">Back to top</span>
          <span class="o-scroll-up-icon" aria-hidden="true"></span>
        </a> */}

 {/* <button
              className='o-scroll-up-icon'
              onClick={() => 
                window.scrollTo(0,0)
               // document.body.scrollTop = 0 // For Safari
                
               // document.documentElement.scrollTop = 0// For Chrome, Firefox, IE and Opera
              }
            >
              TOP
            </button> */}
