import React from 'react'
import PropTypes from 'prop-types'

import { Character } from './Character'

export const CharacterTable = ({ charactersToDisplay }) => {

  console.log('Inside CharTable:')
  console.log(charactersToDisplay)

  return (
    <div>
      <h2>CharacterTable</h2>
      <Character />
    </div>
  )
}

CharacterTable.propTypes = {
  charactersToDisplay: PropTypes.array
}
