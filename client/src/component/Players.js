import React from "react";
import PlayerCard from "./PlayersCard";

const Players = props => {
  console.log(props);

  return (
    <div>
      {props.players.map(player => {
        return (
          <PlayerCard
            key={player.id}
            name={player.name}
            country={player.country}
          />
        );
      })}
    </div>
  );
};

export default Players;
