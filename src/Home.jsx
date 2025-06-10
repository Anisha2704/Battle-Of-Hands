import React from 'react'
import Card from './Components/Card'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
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
            <NavLink to="/one-player" className="Navlink">
            <Card title="Single Player" descp="Step up alone and show you’re the ultimate fighter!" />
            </NavLink>
            <NavLink to="/two-player" className="Navlink">
            <Card title="Two Player" descp="Challenge a friend and fight for bragging rights together!" />
            </NavLink>
          </div>
    </>
  )
}

export default Home