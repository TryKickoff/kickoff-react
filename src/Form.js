import React, { Children, cloneElement } from 'react'
import MaterialForm from './MaterialForm'
import StandardForm from './StandardForm'

const Form = ({ children, horizontal, material }) => {
  let className = 'form'
  if (horizontal) {
    className += ' form--horizontal'
  }
  const childrenWithProps = Children.map(children, (child) => cloneElement(child, { material }))

  if (material) {
    return <MaterialForm className={className}>
      {childrenWithProps}
    </MaterialForm>
  } else {
    return <StandardForm className={className}>
      {childrenWithProps}
    </StandardForm>
  }
}

module.exports = Form
