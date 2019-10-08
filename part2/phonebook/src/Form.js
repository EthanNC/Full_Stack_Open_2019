import React, { useState } from 'react'
import axios from 'axios'
import { updatePhone } from './Backend'
import Notification from './Notification'

const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notficationMessage, setNotificationMessage] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }


  function updatePhonebook(event) {
    event.preventDefault()
    const newEntry = { name: newName, number: newNumber, id: persons.length + 1 }
    if (checkDulpicate()) {
      setPersons([...persons, newEntry]);
      updateDb(newEntry)
      setNotificationMessage(`${newName} has been added to the Phonebook`)
    }
    else {
      const r = window.confirm(`${newName} is already in the phonebook, do you wish to update phone number?`)
      const person = persons.find(person => person.name === newName)
      const updatedNumber = { ...person, number: newNumber }
      console.log(person)
      if (r) {
        updatePhone(updatedNumber)
        setNotificationMessage(`${newName}'s phonenumber has been updated. Refresh to see cahnges`)
      }
    }
  }

  function checkDulpicate() {
    const check = persons.filter(person => person.name === newName)
    if (check.length > 0) {
      return false
    }
    else {
      return true
    }
  }

  async function updateDb(newObject) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      await axios.post(`http://localhost:3001/persons`, newObject, headers)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Notification message={notficationMessage} />
      <form onSubmit={updatePhonebook}>
        <div>
          name: <input onChange={handleNewName} />
          <br />
          phone number: <input onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
