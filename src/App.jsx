import { useState } from 'react'

function Button ({text, handler}) {
  return (
    <>
      <button onClick={handler}>{text}</button>
    </>
  )
}

function App() {
  const [index, setIndex] = useState(0);

  const anecdotes = {
    0 : 'If it hurts, do it more often.',
    1 : 'Adding manpower to a late software project makes it later!',
    2 : 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    3 : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    4 : 'Premature optimization is the root of all evil.',
    5 : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    6 : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    7 : 'The only way to go fast, is to go well.'
  };

  const [votes, setVotes] = useState(Object.keys(anecdotes).map(indx => 0));

  function changeIndex() {
    let newIndex = Math.floor(Object.keys(anecdotes).length * Math.random());
    setIndex(newIndex);
  }

  function addVote() {
    let newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  }

  return (
    <>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
      <Button text = "vote" handler = {addVote} />
      <Button text = "next anecdote" handler = {changeIndex} />
    </>
  )

}

export default App
