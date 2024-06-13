// TODO: Make cards shuffle after each click
// TODO: Add card flip animation when a card is clicked


import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import players from './players';

function App() {
    const [score, setScore] = useState(0);
    const [personal, setPersonal] = useState(Number(localStorage.getItem("personal")));
    const [clickedPlayers, setClickedPlayers] = useState([]);
    const [shuffledPlayers, setShuffledPlayers] = useState([...players]);

    // updates local storage when personal best changes
    useEffect(() => {
      localStorage.setItem('personal', personal)
    }, [personal])

    // handles shuffle array logic
    function shuffler(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr
    }


    // handles game logic
    function handleCardClick(playerName) {
      if (clickedPlayers.includes(playerName)) {
        setScore(0);
        setClickedPlayers([]);
      } else {
        setClickedPlayers([...clickedPlayers, playerName]);
        setScore(s => s + 1);
        if (score + 1 > personal) {
          setPersonal(s => s + 1)
        }
      }
      setShuffledPlayers(shuffler([...shuffledPlayers]))
    }

    const list = shuffledPlayers.map(player => (
      <li key= { player.id }>
        <button onClick={() => handleCardClick(player.name)}>
          <Card name={player.name} src={player.img} />
        </button>
      </li>
    ));

    

  return (
    <>
      <Header 
        title="NBA Memory Game"
        subtitle="Pick the unchoosen player to increase your score"
        score={score}
        personal={personal}
      />
      <div className='max-w-[90rem] m-auto'>
        <ul className='mt-10 grid grid-cols-5 gap-3 justify-items-center'>
          { list }
        </ul>
      </div>
      
    </>
  )
}

export default App
