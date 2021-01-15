import React from "react"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        //old header
        // <div>
        // <header id="navigation">
        //
        // <h1>Game Shop</h1>
        //
        // <Link to="/">Home </Link>
        // <Link to="/basket">Basket </Link>
        // <Link to="/login">Login</Link>
        //
        // </header>
        // </div>

        //new Header
        <header id={"navigation"}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/*site name*/}
                    <a className="navbar-brand" href="/">Game Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/*ref forhome page*/}
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                {/*basket page reference*/}
                                <a className="nav-link" href="/basket">Basket</a>
                            </li>
                            <li className="nav-item dropdown">
                                {/*loginpage reference*/}
                                <a className="nav-link" href="/login">Login</a>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header
