import React, {useState} from 'react';
import Shop from "./Shop";
import Categories from "./Categories";
import {Col, Container, Row} from "reactstrap";
import * as functions from "../functions";

const Home = () => {
    const [activeFilters, setActiveFilters] = useState([]);

    const applyFilter = () => {
        const activeFilters = functions.getActiveFilters();
        setActiveFilters(activeFilters)
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col sm="12" md="2">
                    <Categories applyFilter={applyFilter}/>
                </Col>
                <Col sm="12" md="10">
                    <Shop activeFilters={activeFilters}/>
                </Col>
            </Row>
        </Container>
    );
}


export default Home