import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="home-container">
      <h2> Test emails now for Free
       </h2>
        <p>
Use Email Sandbox to inspect and debug emails in staging, dev, and QA environments before sending them to recipients in production.
        </p>
        <div className="links">
          <span className="btn login"><Link to="login">Log In</Link></span>
          <span className="btn signup"><Link to="signup">Sign Up</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Home
