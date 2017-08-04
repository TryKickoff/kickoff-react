import React from 'react'

const Select = ({ children, defaultValue, onChange }) => <div className='form-controlGroup-inputWrapper form-controlGroup-inputWrapper--select'>
  <select className='form-input form-input--select' defaultValue={defaultValue} onChange={onChange}>
    {children}
  </select>
</div>

export default Select
