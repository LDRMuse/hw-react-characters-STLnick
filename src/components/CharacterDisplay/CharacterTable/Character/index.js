import React from 'react'
import PropTypes from 'prop-types'

export const Character = ({ job, name }) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
    </tr>
  )
}

Character.propTypes = {
  job: PropTypes.string,
  name: PropTypes.string
}
