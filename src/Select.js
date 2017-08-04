import React from 'react'

const Select = ({ children, defaultValue, disabled, onChange }) => <div className='form-controlGroup-inputWrapper form-controlGroup-inputWrapper--select'>
  <select className='form-input form-input--select' defaultValue={defaultValue} disabled={disabled} onChange={onChange}>
    {children}
  </select>
</div>

export default Select
