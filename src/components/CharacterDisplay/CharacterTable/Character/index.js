import React from 'react'
import PropTypes from 'prop-types'

export const Character = ({ job, name }) => {

  return (
    <div>
      <h3>{name}</h3>
      <p>Job: {job}</p>
    </div>
  )
}

Character.propTypes = {
  job: PropTypes.string,
  name: PropTypes.string
}
