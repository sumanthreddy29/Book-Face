import React from 'react';
import SideNav from './Sidenav/SideNav'
import './Navbar.css'
import SearchBar from './SearchBar'
import ProfileToggle from './ProfileToggle'
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';



const navbar = props => (
    
    <header className="navbar">
  
       <nav className="navbar_navigation">
            <SideNav />
            <div className = "navbar_logo"><a href="/">BOOKFACE</a></div>
            <SearchBar />
            <div className="space" />
            <div className = "navbar_items">
                <ul> 
                    <li><a href="/Home"><HomeIcon/> Home</a></li>
                    <li> <a href="/Home"> <NotificationsIcon/> Notifications</a></li>
                 </ul>
            </div>
            <ProfileToggle />
         </nav>
     
     </header> 
     
     

);

export default navbar;