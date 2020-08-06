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
    <table>
      <caption>CharacterTable</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {renderCharacters()}
      </tbody>
    </table>
  )
}

CharacterTable.propTypes = {
  charactersToDisplay: PropTypes.array
}
