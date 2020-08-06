import React, { useEffect, useState } from 'react'

import { CharacterTable } from './CharacterTable'
import { FilterBar } from './FilterBar'
import { Form } from './Form'

import api from 'api'

export const CharacterDisplay = () => {
  const [filterText, setFilterText] = useState('')
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    (async () => {
      const data = await api.index()
      setCharacters(data)
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
      <CharacterTable />
      <Form />
    </div>
  )
}
