import Card from "./componets/Card"
import'./App.css'
import {useState} from 'react'

const getRandomInt = (min, max)=> Math.floor(Math.random() * (max - min +1) + min);

const playerCard = {
  image: "http://placekitten.com/130/110",
  stats: [{name: 'cuteness',value: getRandomInt(1, 100)},
          {name: 'speed', value: getRandomInt(1, 100)},
          {name: 'power', value: getRandomInt(1, 100)}]
}

const opponentcard ={
  image: "http://placekitten.com/130/100?image=2",
  stats: [{name: 'cuteness',value: getRandomInt(1, 100)},
          {name: 'speed', value: getRandomInt(1, 100)},
          {name: 'power', value: getRandomInt(1, 100)}]
}

const createCard = index =>({
    image: "http://placekitten.com/130/100?=" + index,
    stats: [{name: 'cuteness',value: getRandomInt(1, 100)},
            {name: 'speed', value: getRandomInt(1, 100)},
            {name: 'power', value: getRandomInt(1, 100)}
          ],
  id: crypto.randomUUID()
})

const deck = Array(16).fill(null).map((_,index)=>createCard(index));
const half =Math.ceil(deck.length / 2)
const dealCards = () =>{
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  }
}
export default  function App(){

  const[result,setResult] = useState('');
  const[cards, setCards] = useState(dealCards);
  
  function comperCards(){
    const playerStats = cards.player[0].stats[0];
    const opponentStats = cards.opponent[0].stats[0];


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
         <ul className='card-list'>
          {cards.player.map(playerC =>(
            <li>
              <Card card={playerC}/>
            </li>
          ))}
         </ul>
          <div className='center-area'>
            <p>{result ||'Press The Button'}</p>
            <button type='button' onClick={comperCards}>play</button>
          </div>
         <Card card={cards.opponent[0]}/>
         {console.log(dealCards())}
       </div>
    </>
 
  );
}