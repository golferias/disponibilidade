import React from 'react'

export default function Footer () {
  //const [visible, setVisible] = useState(false)

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollHeight;
  //   if (scrolled > 820){
  //     setVisible(true)
  //   }
  //   else if (scrolled <= 820){
  //     setVisible(false)
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // window.addEventListener('scroll', toggleVisible);
  //window.addEventListener('click', toggleVisible);
  //style={{display: visible ? 'inline' : 'none'}}
  return (
    <footer className='footer'>
      <div className='container-main'>
        {/* <div className='footer__menu' /> */}
        <div className='footer__disclaimer'>
          <a
            href='tel:+351914486146'
            class='text-replace js-cd-top cd-top--is-visible cd-top--fade-out'
          >
            <i className='fa fa-phone-square fa-2x ' aria-hidden='true'>
              {' '}
            </i>
            <p> 919 999 999</p>
          </a>
          <p></p>
          <p className='footerdevelopedby'>
            Developed by <strong>PhD DevSolutions</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

{
  /* <a href="#" class="o-scroll-up static" title="back to top">
          <span class="o-scroll-up-text">Back to top</span>
          <span class="o-scroll-up-icon" aria-hidden="true"></span>
        </a> */
}

{
  /* <button
              className='o-scroll-up-icon'
              onClick={() => 
                window.scrollTo(0,0)
               // document.body.scrollTop = 0 // For Safari
                
               // document.documentElement.scrollTop = 0// For Chrome, Firefox, IE and Opera
              }
            >
              TOP
            </button> */
}
