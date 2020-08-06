import React from 'react'
import PropTypes from 'prop-types'

import './FilterBar.css'

export const FilterBar = ({ handler, text }) => {

  return (
    <div className="flex flex--column flex--align-center">
      <label className="filter-label" htmlFor="filter">Filter By Name</label>
      <input className="input" onChange={handler} type="text" id="filter" value={text} />
    </div>
  )
}

FilterBar.propTypes = {
  handler: PropTypes.func,
  text: PropTypes.string
}
