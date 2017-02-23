import React, { Children, cloneElement} from 'react'

const Fieldset = ({ children, material }) => {
  const childrenWithProps = Children.map(children, (child) => cloneElement(child, { material }))
  return <fieldset className='form-fieldset'>
    {childrenWithProps}
  </fieldset>
}

module.exports = Fieldset
