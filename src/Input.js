import React from 'react'

const Input = (props) => {
  if (props.material) {
    return <input className='form-input' id={props.id} required={props.required} />
  }
  return <div className='form-controlGroup-inputWrapper'>
    <input className='form-input' id={props.id} placeholder={props.placeholder} required={props.required} />
  </div>
}

module.exports = Input
