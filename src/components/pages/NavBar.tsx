import { type } from 'os'
import React, { ReactNode } from 'react'
import { Icon, Navbar, NavItem, Tab, Tabs } from 'react-materialize'
import M from "materialize-css";
import { Link } from 'react-router-dom';

const NavBarItem: React.FC = (): JSX.Element => {
    return (
        <>
        <div className="nav-wrapper green">
            <a href="#" className="brand-logo">
                Materialize
            </a>
            <ul id="nav-mobile" className=
                "right hide-on-med-and-down">
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                        
                </li>
            </ul>
        </div>
    </>
    ) 
}
export default NavBarItem