import React from 'react'
import logo from './Images/logo.png'
const Home = () => {
  return (
    <div class="navbar">
         <header>
            <b class="logo"><img src={logo} class="logo"></img></b>
            <nav>
                <a href="./home.html"><b>Home</b></a>
                <a href="./content.html"><b>Contact Us</b></a>
                <a href="./register.html"><button class="register-button"><b>Register</b></button></a>
            </nav>
        </header>
    </div>
  )
}

export default Home
  