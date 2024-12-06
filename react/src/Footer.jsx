import React from 'react'
import logo from './Images/logo.png'
function Footer() {
  return (
    <footer>
    <div class="footer-info">
        <img src={logo}></img>
        <p>The Premier tuition institute in Kerala for science and mathematics.</p>
        <div class="social-links">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-solid fa-x"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
    <div class="footer-links">
        <div class="quick-links">
            <h3>Quick Links</h3>
            <a href="">Home</a>
            <a href="">Contact Us</a>
            <a href="">Register</a>
            <a href="">Sitemap</a>
        </div>
        <div class="branches">
            <h3>Branches</h3>
            <a href="#">Kollam</a>
            <a href="#">Ernakulam</a>
            <a href="#">Thiroor</a>
            <a href="#">Chalakudi</a>
        </div>
        <div class="contact">
            <h3>Contact</h3>
            <p>Toll free: +1234 568 963</p>
            <p>Email: example@gmail.com</p>
            <p>Address: Kerala First Tuition Academy</p>
            <p>Opposite Students Book Stall, ChurchStop, Chalakudy South Junction</p>
        </div>
    </div>
</footer>
  )
}

export default Footer