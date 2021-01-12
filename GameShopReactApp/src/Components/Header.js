import React from "react"
import {Link} from "react-router-dom";


function Header(){


    return(
        <div>
        <header id="navigation">

        <h1>Game Shop</h1>

        <Link to="/">Home </Link>
        <Link to="/basket">Basket </Link>
        <Link to="/login">Login</Link>

        </header>
        </div>)
}


export default Header
