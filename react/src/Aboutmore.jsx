import React from 'react'
import img4 from './Images/7.png'
const Aboutmore = () => {
  return (
    <div class="skill">
    <div class="skills">
        <img src={img4}></img>
    </div>
    <div class="skill-content">
        <h1>EVERYONE IS ABLE TO SHARPEN THEIR SKILLS</h1>
        <p>We believe that education is the key to unlocking the full potential of every student. We are Kerala's premier tuition center, dedicated to providing top-notch educational support and guidance to students of all levels. Our commitment to excellence has made us a trusted name in the world of education.</p>
        <ul>
            <li>Experienced Faculty</li>
            <li>Online Mobile App Facility</li>
            <li>24x7 Doubt clearance Session</li>
            <li>Offline Theory + Live Sessions</li>
            <li>Weekly Model Exams</li>
            <li>Convenience of paying fees in monthly installments</li>
        </ul>
        <a href="./home.html"><button class="btn">More about us</button></a>
    </div>
</div>
  )
}

export default Aboutmore