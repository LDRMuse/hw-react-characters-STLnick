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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const jobInput = e.target.querySelector('#job')
    const nameInput = e.target.querySelector('#name')

    setCharacters([...characters, { name: nameInput.value, job: jobInput.value }])

    // Reset input fields
    jobInput.value = ''
    nameInput.value = ''
  }
  return (
    <div>
      <h2>CharacterDisplay</h2>
      <FilterBar handler={handleFilterTextChange} text={filterText} />
      <CharacterTable charactersToDisplay={characters} />
      <Form handler={handleFormSubmit} />
    </div>
  )
}
