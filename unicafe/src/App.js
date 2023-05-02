import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.title}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.title}: </td><td>{props.value}</td></tr>
  )
}

const Statistic = (props) => {
  if (props.all>0)
    return (
      <table>
        <tbody>
        <StatisticLine title="good" value={props.good}/>
        <StatisticLine title="neutral" value={props.neutral}/>
        <StatisticLine title="bad" value={props.bad}/>
        <StatisticLine title="all" value={props.all}/>
        <StatisticLine title="average" value={props.avg}/>
        <StatisticLine title="positive" value={props.positive}/>
        </tbody>
      </table>
    ) 
  else 
    return "No feedback given"
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodFeedback = () => {
    console.log("good: ",good+1)
    setGood(good+1)
  }
  
  const setNeutralFeedback = () => {
    console.log("neutral: ",neutral+1)
    setNeutral(neutral+1)
  }

  const setBadFeedback = () => {
    console.log("bad: ",bad+1)
    setBad(bad+1)
  }

  const getAllCount = () => {
    console.log("all: ",bad+neutral+good)
    return bad+neutral+good
  }

  const getAvg = () => {
    return (good-bad)/(bad+neutral+good)
  }

  const getPositive = () => {
    return 100*good/(bad+neutral+good) + "%"
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" handleClick={() => setGoodFeedback()}/>
      <Button title="neutral" handleClick={() => setNeutralFeedback()}/>
      <Button title="bad" handleClick={() => setBadFeedback()}/>
      <h1>statistics</h1>
      <Statistic good={good} bad={bad} neutral={neutral} 
      all={getAllCount()} avg={getAvg()} positive={getPositive()}
      />
    </div>
  )
}

export default App