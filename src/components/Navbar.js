/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container row">
                <a className="brand-logo col s4">
                    <div><Link to="/">OLUWASEAJ</Link></div></a>
                <ul className="right col s16">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
    </div>
        </nav>
    )
}
export default Navbar