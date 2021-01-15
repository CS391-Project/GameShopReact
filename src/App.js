// Basic Imports
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

// Other Imports
import './App.css';
import MoreInfoPage from "./Components/MoreInfoPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Basket from "./Components/Basket";
import Login from "./Components/Login";
import Home from "./Components/Home";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/basket"><Basket/></Route>

                        <Route path="/login"><Login/></Route>

                        <Route path="/more_info"> <MoreInfoPage/> </Route>

                        <Route path="/"><Home/></Route>

                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;