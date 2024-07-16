import React from "react";
import { gql, useQuery } from "@apollo/client";
const GET_PLAYER = gql`
  query getPlayers{
  players{
     _id 
      name 
      photoUrl
      votes
  }
  }
`
export default function Item({ row }) {
  const {data,loading,error} = useQuery(GET_PLAYER);
  if (loading) return <p>loading...</p>
  if(error) return <p>Something went wrong!!! try later</p>
  return (
    <li className="Player">
      <div className="item__avatar">
        <img
          className="item__avatar__img"
          src={row.picture}
          alt={row.displayName}
        />
      </div>
      <span className="item__name">{row.displayName}</span>
      <span className="item__score">{row.score}</span>
    </li>
  );
}