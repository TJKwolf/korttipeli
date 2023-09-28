import Card from "./componets/Card"
import'./App.css'
import {useState} from 'react'

const getRandomInt = (min, max)=> Math.floor(Math.random() * (max - min +1) + min);

const playerCard = {
  image: "http://placekitten.com/130/110",
  stats: [{name: 'cuteness',value: getRandomInt(1, 999)},
          {name: 'speed', value: getRandomInt(1, 999)},
          {name: 'power', value: getRandomInt(1, 999)}]
}

const opponentcard ={
  image: "http://placekitten.com/130/100?image=2",
  stats: [{name: 'cuteness',value: getRandomInt(1, 999)},
          {name: 'speed', value: getRandomInt(1, 999)},
          {name: 'power', value: getRandomInt(1, 999)}]
}

const createCard = index =>({
    image: "http://placekitten.com/130/100?=" + index,
    stats: [{name: 'cuteness',value: getRandomInt(1, 999)},
            {name: 'speed', value: getRandomInt(1, 999)},
            {name: 'power', value: getRandomInt(1, 999)}
          ],
  id: crupto.randomUUID()
})

export default  function App(){

  const[result,setResult] = useState('');
  
  function comperCards(){
    const playerStats = playerCard.stats[0];
    const opponentStats = opponentcard.stats[0];


    if(playerStats.value === opponentStats.value){
      setResult('draw');
    }
    else if(playerStats.value > opponentStats.value){
      setResult('win');
    }
    else{
      setResult('lose');
    }

  }
  return(
    <>
      <h1>Cat_game</h1>
       <div className='game'>
         <Card card={playerCard}/>
          <div className='center-area'>
            <p>{result ||'Press The Button'}</p>
            <button type='button' onClick={comperCards}>play</button>
          </div>
         <Card card={opponentcard}/>
       </div>
    </>
 
  );
}