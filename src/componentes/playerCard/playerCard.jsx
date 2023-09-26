import { useState } from "react";
import "./card.css";
import defaultImage from '../../images/default.png'
export default function PlayerCard(props) {
  const [isHidden, setHidden] = useState(false);
  let { name, image } = props;


  return (
    <>
      <div className="player-card">
        <div className="player-name">{isHidden ? "xxxxx" : name}</div>
        <div className="player-image">
          <img
            src={`${
              isHidden
                ? defaultImage
                : image
            }`}
            alt="playerimage"
            onError={(e) => {
              e.target.src = defaultImage
              console.log(e);
            }}
          />
        </div>
        <div>
          <button onClick={() => setHidden((e) => !e)} className="toggle-hide">
            {isHidden ? "اظهار" : "اخفاء"}
          </button>
        </div>
      </div>
    </>
  );
}
