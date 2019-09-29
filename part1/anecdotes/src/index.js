import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState(0)

  const initialState = [0,0,0,0,0,0,0]
  const [vote, setVote] = useState(initialState)

  var maxVote = Math.max(...vote)
  var topAnecdote = vote.indexOf(maxVote)

  function updateVote (index, newValue, array) {
    return [...array.slice(0, index), newValue, ...array.slice(index + 1)];
  }
  console.log(topAnecdote)
  return (
    <div>
        <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>
      has {vote[selected]} votes
      <br/>
      <button onClick={() => setVote(vote => updateVote(selected,vote[selected]+1, vote)) }>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>Next Anticdote</button>
      <h1>Highest Voted Anecdote</h1>
      {props.anecdotes[topAnecdote]}
      <br/>
      has {maxVote} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
