import React, { useEffect, useState } from 'react'

import { CharacterTable } from './CharacterTable'
import { FilterBar } from './FilterBar'
import { Form } from './Form'

import api from 'api'

export const CharacterDisplay = () => {
  const [characters, setCharacters] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    (async () => {
      setCharacters(await api.index())
    })()
  }, [])

  const handleFilterTextChange = (e) => {
    const newFilterText = e.target.value
    setFilterText(newFilterText)
  }

  return (
    <div>
      <h2>CharacterDisplay</h2>
      <FilterBar handler={handleFilterTextChange} text={filterText} />
      <CharacterTable charactersToDisplay={characters} />
      <Form />
    </div>
  )
}
