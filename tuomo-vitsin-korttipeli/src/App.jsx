import Card from "./componets/Card"
import'./App.css'
const playerCard = {
  image: "http://placekitten.com/130/110",
  stats: [{name: 'cuteness',value: 10}]
}
export default  function App(){
  return(
    <>
      <hi>Hello world</hi>
      <Card card={playerCard}/>

    </>
 
  );
}