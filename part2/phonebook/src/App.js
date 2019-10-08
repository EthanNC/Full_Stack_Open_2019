import React, { useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import {deleteEntry} from './Backend'
import Notification from './Notification'


const App = ({data}) => {
  const [ persons, setPersons] = useState(data)
  const [error, setError] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification error={error}/>
      <Filter persons={persons}/>
      <h2>Add a new contact</h2>
      <Form persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <React.Fragment key = {i}>
        {person.name}
        {person.number}
        <button onClick={() => deleteEntry(person.id, setError) }>delete</button>
        <br/>
        </React.Fragment>
      ))} 
    </div>
  )
}

export default App