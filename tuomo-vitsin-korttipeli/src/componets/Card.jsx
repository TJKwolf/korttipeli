
export default function Card({card}){
    return(
        <div className="ichigo">
            <img src={card.image}/>
            <ul className="stat-list">
                <li className="stat-list-item">
                  <span>Cuteness</span>
                  <span>30</span>
                </li>
            </ul>
            <ul>
                <li>
                  <span>Speed</span>
                  <span>70</span>
                </li>
            </ul>

        </div>

    );
}