import React from 'react'
import PropTypes from 'prop-types'

export const FilterBar = ({ handler, text }) => {

  return (
    <div>
      <label htmlFor="filter">Filter By Name</label>
      <input onChange={handler} type="text" id="filter" value={text} />
    </div>
  )
}

FilterBar.propTypes = {
  handler: PropTypes.func,
  text: PropTypes.string
}
