import React from 'react'
import './HomeScreen.css'


const homescreen = props => (
    <header className="homebar">
        <nav className="home_nav">
            <div className = "homebar_logo"><a href="/">BOOKFACE</a></div>
            <div className="space" />
            <div className = "homebar_items">
                <ul> 
                    <li><a  className="btn" href="/login">SIGN IN</a></li>
                </ul>
            </div>
        </nav>
        <div className="home">
            <h1> A New World is Rising. Let's Discover it <br/>
			    Feel the Social Experience..</h1>
		    <a href="/register" class = "btn_register"> Register </a>
        </div>
    </header>
    
);

export default homescreen;