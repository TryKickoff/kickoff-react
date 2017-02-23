import React, { Children, cloneElement } from 'react'

const Control = ({ children, error, material, success, warning }) => {
  let className = 'form-controlGroup'
  if (success) {
    className += ' has-success'
  } else if (error) {
    className += ' has-error'
  } else if (warning) {
    className += ' has-warning'
  }

  if (material) {
    const childrenWithProps = Children.map(children, (child) => cloneElement(child, { material }))
    const Input = childrenWithProps.filter(f => f.type.name === 'Input')[0]
    const Label = childrenWithProps.filter(f => f.type.name === 'Label')[0]

    children = []
    children.push(Input)
    children.push(Label)
    children.push(<i className='form-inputBar' key='key' />)
  }

  return <div className={className}>
    {children}
  </div>
}

module.exports = Control
