import React from "react";
import { useSearches } from "../hooks";

export default function PlayerCard({player}) {
    const [searches, toggleSearches] = useSearches();

    return (
        <div className="player-card" onClick={toggleSearches}>
            <h1>{player.name}</h1>
            <h2>{player.country}</h2>

            {searches && <p>Searches: {player.searches}</p>}
        </div>
    )
}