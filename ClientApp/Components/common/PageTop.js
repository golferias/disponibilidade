import React from 'react'
import PropTypes from 'prop-types'

export default function PageTop (props) {
  return (
    <div>
      <header className='header'></header>
    </div>
  )
}

PageTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
