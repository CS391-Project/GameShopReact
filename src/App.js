// Basic Imports
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// Other Imports
import './App.css';
import MoreInfoPage from "./Components/MoreInfoPage";
import {Button, Container, Row, Col} from 'reactstrap';
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
                        <Route exact path="/"><Home/></Route>

                        <Route exact path="/basket"><Basket/></Route>

                        <Route exact path="/login"><Login/></Route>

                        <Route exact path="/moreInfoPage"> <MoreInfoPage/> </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;