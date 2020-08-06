import React from 'react'

export const Form = () => {

  // 2 inputs: 1 name - 1 job --no handler
  // 1 button: submit --needs handler
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
      <label htmlFor="job">Job</label>
      <input id="job" type="text" />
      <button type="submit">Add Character</button>
    </form>
  )
}
