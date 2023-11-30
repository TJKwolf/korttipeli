
export default function Card({card, selectedStat, handSelect}){
   if(!card) return <div className="card back"/>;


    return(
        <div className="card">
            <img src={card.image}/>
            <ul className="stat-list">
                {card.stats.map((stat, index) =>(
                <li className={`stat-list-item${selectedStat === index ? ' selected': ''}`}
                 onClick={()=>handSelect(index)} key={index}>
                      <span>{stat.name}</span>
                      <span>{stat.value}</span>
                    </li>
                ))}
                
            </ul>

        </div>
    );
}