import './App.css'
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
    const [score, setScore] = useState(0);
    const [personal, setPersonal] = useState(Number(localStorage.getItem("personal")));

    function addOne() {
      if (personal <= score) {
          setPersonal(p => p + 1);
      }
      setScore(c => c + 1);
  }

    // updates local storage when personal best changes
    useEffect(() => {
        localStorage.setItem('personal', personal)
    }, [personal])

  return (
    <>
      <Header 
        title="NBA Memory Game"
        subtitle="Pick the unchoosen player to increase your score"
        score={score}
        personal={personal}
      />
      <button onClick={addOne}>Add one</button>
    </>
  )
}

export default App
