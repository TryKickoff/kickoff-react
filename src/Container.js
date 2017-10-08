import React from 'react'

const Container = ({ children, full, narrow, wide }) => {
  let className = 'l-container'
  if (full) {
    className += ' l.container--full'
  } else if (narrow) {
    className += ' l.container--narrow'
  } else if (wide) {
    className += ' l.container--wide'
  }
  return <div className={className}>{children}</div>
}

export default Container
