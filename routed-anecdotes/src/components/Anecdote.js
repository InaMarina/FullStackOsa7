import React from "react";
import { useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  console.log(anecdotes);
  const id = useParams().id;
  const anecdote = anecdotes.find((a) => a.id === id);
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <p>for more info see: {anecdote.info}</p>
    </div>
  );
};

export default Anecdote;
