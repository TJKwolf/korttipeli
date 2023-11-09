import Card from "./componets/Card"
import PlayButton from "./componets/PlayButton";
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
    image: "http://placekitten.com/130/100?image=" + index,
    stats: [{name: 'cuteness',value: getRandomInt(1, 100)},
            {name: 'speed', value: getRandomInt(1, 100)},
            {name: 'power', value: getRandomInt(1, 100)}
          ],
  id: crypto.randomUUID()
})

const deck = Array(16).fill(null).map((_,index)=>createCard(index));
const half =Math.ceil(deck.length / 2)
const dealCards = () =>{
  shuffle(deck);
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  }
}

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default  function App(){

  const[result,setResult] = useState('');
  const[cards, setCards] = useState(dealCards);
  const [ gameState, setGameState ] = useState('play')
  const[selectedStat, setSelected] = useState(0);


  function comperCards(){
    const playerStats = cards.player[0].stats[selectedStat];
    const opponentStats = cards.opponent[0].stats[selectedStat];


    if(playerStats.value === opponentStats.value){
      setResult('draw');
    }
    else if(playerStats.value > opponentStats.value){
      setResult('win');
    }
    else{
      setResult('lose');
    }
    setGameState('result');

  }

  function nextRound(){
    setCards(cards=>{
      const playedCards = [{...cards.player[0]}, {...cards.opponent[0]}];
      const player = cards.player.slice(1);
      const opponent = cards.opponent.slice(1);
      if (result === 'draw')
      {
        return{
          player,
          opponent
        };
      }

      if(result === 'win'){
        return{
          player:[...player, ...playedCards],
          opponent
        };
      }

      if(result === 'lose'){
        return{
          player,
          opponent:[...opponent, ...playedCards]
        };
      }
      return cards;
    });
    setGameState('play');
    setResult('');
  }
  return(
    <>
      <h1>Cat_game</h1>
       <div className='game'>
         <ul className='card-list'>
          {cards.player.map((playerC, index) =>(
            <li className='card-list-item player' key={playerC.id}>
              <Card card={index === 0 ? playerC : null}
              handSelect={statIndex => gameState === 'play' && setSelected(statIndex)}
              selectedStat={selectedStat}
              />
            </li>
          ))}
         </ul>
          <div className='center-area'>
            <p>{result ||'Press The Button'}</p>
            {
              gameState === 'play' ? (<PlayButton text={'play'} handleClick={comperCards}/>) : (<PlayButton text={'play'} handleClick={nextRound}/>)
            }
           
          </div>

        <ul className='card-list opponent'>
          {cards.opponent.map(opponentC =>(
            <li className='card-list-item opponent' key={opponentC.id}>
              <Card card={opponentC}/>
            </li>
          ))}
        </ul>

       </div>
    </>
 
  );
}