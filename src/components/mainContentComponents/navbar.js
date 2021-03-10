import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="main-content-Navbar">
           <div className="wrapper">
           <ul>
                <li><NavLink exact to='/home/trending'>Trending</NavLink></li>
                <li><NavLink to='/home/latest'>Latest</NavLink></li>
                <li><NavLink to='/home/company'>Company</NavLink></li>
            </ul>
           </div>
        </div>
    )
}
export default Navbar 