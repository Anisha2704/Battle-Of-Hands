// 


import React, { useState } from "react";
import "./App.css";
import Card  from "./Card";
import One from "./One";

function App() {
  
  let [mode,setMode] = useState("");

  const single = () => {
    setMode("single");
  }
  const two = () => {
    setMode("two");
  }

  return (
    <>
      {mode === "single" ? (
        <One />
      ) : (
        <>
          <h1>Welcome to Rock, Paper, Scissors!</h1>
          <h1>✌ 👊 🤜</h1>
          <p>
            Step into the ultimate battleground where hands speak louder than words!
            Are you ready to throw down your best move and outsmart your opponent?
            This isn’t just a game — it’s a duel of instinct, speed, and strategy.
            Whether you're challenging a cold, calculating machine or testing a
            friend's reflexes, the fate of your fingers awaits.
          </p>
          
          <div className="card-container">
            <Card onClick={single} title="Single Player" descp="Think you can outplay the machine? Take on the AI and prove you're the hand-to-hand champion!" />
            <Card onClick={two} title="Two Player" descp="Grab a friend and settle the score in the arena — side by side, turn by turn!" />
          </div>
        </>
      )}
    </>
  );
}

export default App;
