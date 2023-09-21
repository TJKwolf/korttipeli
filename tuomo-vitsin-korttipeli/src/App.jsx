import Card from "./componets/Card"
import'./App.css'
const playerCard = {
  image: "http://placekitten.com/130/110",
  stats: [{name: 'cuteness',value: 30},
          {name: 'speed', value: 70},
          {name: 'power', value: 39}]
}

const opponentcard ={
  image: "http://placekitten.com/130/100?image=2",
  stats: [{name: 'cuteness',value: 40},
          {name: 'speed', value: 20},
          {name: 'power', value: 90}]
}

export default  function App(){
  
  function comperCards(){
    const playerStats = playerCard.stats[0];
    const opponentStats = opponentcard.stats[0];
    let result = '';

    if(playerStats.value === opponentStats.value){
      result = "draw";
    }
    else if(playerStats.value > opponentStats.value){
      result = "win";
    }
    else{
      result = "lose";
    }
    console.log(result);
  }
  
  return(
    <>
      <h1>Hello world</h1>
      <Card card={playerCard}/>
      <button type='button' onClick={comperCards}>play</button>
      <Card card={opponentcard}/>

    </>
 
  );
}