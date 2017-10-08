import React from 'react'
import Label from './Label'
import Select from './Select'

const Control = ({ children, error, label, success, warning }) => {
  let className = 'form-controlGroup'
  if (success) {
    className += ' has-success'
  } else if (error) {
    className += ' has-error'
  } else if (warning) {
    className += ' has-warning'
  }
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      {children}
    </div>
  )
}

export default Control
