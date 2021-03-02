import React from 'react'
import { NavLink, withRouter } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="main-content-Navbar">
           <div className="wrapper">
           <ul>
                <li><NavLink exact to=''>Trending</NavLink></li>
                <li><NavLink to='/latest'>Latest</NavLink></li>
                <li><NavLink to='/company'>Company</NavLink></li>
            </ul>
           </div>
        </div>
    )
}
export default Navbar 