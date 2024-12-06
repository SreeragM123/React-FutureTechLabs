import React from 'react'
import img1 from './Images/lightbulb.png'
import img2 from './Images/avatar.png'
import img3 from './Images/1.png'
const About = () => {
  return (
    <div class="hero">
            <div class="hero-content">
                <p class="hero-tagline">
                <img src={img1} class="bulb"></img><b>Nurturing Knowledge & Cultivating Excellence</b>
                </p>
                <h1>Kerala's Pioneering Tuition Center</h1>
                <p class="hero-subtitle">Unlocking the door to academic excellence, one lesson at a time.</p>
                <div class="trust-info">
                    <img src={img2} class="trust-avatars"></img>
                    <span><b>Trusted by over 65K Students Since 2022</b></span>
                </div>
            </div>
            <div class="hero-image">
                <img src={img3}></img>
            </div>
        </div>
  )
}

export default About