import axios from 'axios'
export async function deleteEntry(id, setError) {
    try {
      console.log(id)
      await axios.delete(`http://localhost:3001/api/persons/${id}`)
      
    } catch (error) {
      console.log(error)
      setError('This information has already been removed from the server')
    }
}

export async function updatePhone(newEntry){
  try {
    await axios.put(`http://localhost:3001/api/persons/${newEntry.id}`, newEntry)
  } catch (error) {
    console.log(error)
  }
}
