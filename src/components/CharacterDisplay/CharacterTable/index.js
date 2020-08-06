import React from 'react'
import PropTypes from 'prop-types'

import { Character } from './Character'

export const CharacterTable = ({ charactersToDisplay }) => {

  const renderCharacters = () => {
    return charactersToDisplay.map(({ job, name }, i) => {
      return <Character job={job} key={i} name={name} />
    })
  }

  return (
    <div>
      <h2>CharacterTable</h2>
      {renderCharacters()}
    </div>
  )
}

CharacterTable.propTypes = {
  charactersToDisplay: PropTypes.array
}
