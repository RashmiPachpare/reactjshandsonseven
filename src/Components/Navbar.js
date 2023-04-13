import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="Navbar">
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "notactive")}>Home</NavLink>
            <NavLink to='/Students' className={({ isActive }) => (isActive ? "active" : "notactive")}>Students</NavLink>
            <NavLink to='/ContactUs' className={({ isActive }) => (isActive ? "active" : "notactive")}>ContactUs</NavLink>
        </div>
    )
}

export default Navbar
