import React from "react";
import { useSearches } from "../hooks";
import styled from "styled-components";

const StyledPlayerCard = styled.div`
    border: 2px solid black;
    width: 50%;
    margin: 1rem auto;
`;

export default function PlayerCard({player}) {
    const [searches, toggleSearches] = useSearches();

    return (
        <StyledPlayerCard onClick={toggleSearches}>
            <h1>{player.name}</h1>
            <h2>{player.country}</h2>

            {searches && <p>Searches: {player.searches}</p>}
        </StyledPlayerCard>
    )
}