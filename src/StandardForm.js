import React from 'react'

const StandardForm = ({ children, className }) => <form className={className}>
  {children}
</form>

module.exports = StandardForm
