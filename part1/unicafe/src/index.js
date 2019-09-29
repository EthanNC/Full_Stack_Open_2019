import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
    const {text, value} = props
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const {good, bad, neutral, total, clickHandler} = props
    const feedbackCheck = () =>{
        if(good > 0 || bad > 0 || neutral > 0){
            return true
        }
        return false
    }
    return(
        <div>
            <h1>Give feedback</h1>
            <button onClick={()=>clickHandler('good')}>good</button>
            <button onClick={()=>clickHandler('neutral')}>neutral</button>
            <button onClick={()=>clickHandler('bad')}>bad</button>
            <h1>Statistics</h1>
            {!feedbackCheck() && 'no feedback'}
            <table>
            <tbody>
            {feedbackCheck() ? <Statistic text="good" value={good}/>:''}
            { feedbackCheck() ? <Statistic text="neutral" value={neutral}/>:''}
            { feedbackCheck() ? <Statistic text="bad" value={bad}/>:''}
            { feedbackCheck() ? <Statistic text="average" value={(total)/3}/>:''}
            { feedbackCheck() && total > 0 ? <Statistic text="positive" value={(good/total)*100 + '%'}/>:''}
            </tbody>
            </table>        
        </div>
    )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  var total = good+bad+neutral

  const clickHandler = (type)  => {
      switch (type) {
        case 'good':
            setGood(good+1)
            break;
        case 'neutral':
            setNeutral(neutral+1)
            break;
        case 'bad':
            setBad(bad+1)
            break;
        default:
            break;
      }
  }

  return (
    <Statistics total={total} good={good} bad={bad} neutral={neutral} clickHandler={clickHandler}/>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)