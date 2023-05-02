import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.title}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomNumber = () => {
    const random = Math.floor(Math.random() * (anecdotes.length-1))
    // console.log(random)
    return random
  }

  const [selected, setSelected] = useState(0)

  const getNext = () => {
    setSelected(getRandomNumber())
  }

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length-1))
  
  const voteCurrent = () => {
  // console.log(selected)
  const copy = [...votes]
  // console.log(copy)
  // increment the value in position X by one
  copy[selected] += 1  
  // console.log(copy)
  setVotes(copy)
  }

  const getMax = () => {

    var max = votes[0];
    var maxIndex = 0;

    for (var i = 1; i < votes.length; i++) {
        if (votes[i] > max) {
            maxIndex = i;
            max = votes[i];
        }
    }
    // console.log("max",maxIndex, max)
    return {"index": maxIndex, "value": max};
}
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <div>
      <Button handleClick={() => voteCurrent()} title="vote"/>
      <Button handleClick={() => getNext()} title="next anecdote"/>
      </div>
      <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[getMax().index]}
      <div>has {getMax().value} votes</div>
      </div>
    </div>
  )
}

export default App