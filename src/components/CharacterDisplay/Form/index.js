import React from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {

  // 2 inputs: 1 name - 1 job --no handler
  // 1 button: submit --needs handler
  return (
    <form
      className="flex flex--column flex--align-center"
      onSubmit={handler}
    >
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
      <label htmlFor="job">Job</label>
      <input id="job" type="text" />
      <button type="submit">Add Character</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func
}
