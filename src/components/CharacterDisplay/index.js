import React from 'react'

import { CharacterTable } from './CharacterTable'
import { FilterBar } from './FilterBar'
import { Form } from './Form'

export const CharacterDisplay = () => {

  return (
    <div>
      <h2>CharacterDisplay</h2>
      <FilterBar />
      <CharacterTable />
      <Form />
    </div>
  )
}
