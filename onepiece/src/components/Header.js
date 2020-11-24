import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/images/gordito.jpg'
const Header = () => {
    return (
        <React.Fragment>
            <header id="header">

                <div className="center">
                   
                <div id="menu">
                        <nav id="menu">
                        <ul>
                                <li>
                                    <NavLink to="/">Inicio</NavLink>
                                    
                                </li>
                                <li>
                                    <NavLink to="/menu">Menu</NavLink>
                                </li>
                                <li>
                                <NavLink to="/agregar">Agregar Pirata</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logo del proyecto" /><br />
                    <span id="marca">
                        <strong>Clase fullstack</strong>
                    </span>


                </div>
            </header>
        </React.Fragment>
    )
}
export default Header;