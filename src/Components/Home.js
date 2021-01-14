import React, {useState} from 'react';
import Shop from "./Shop";
import Categories from "./Categories";
import {Col, Container, Row} from "reactstrap";

const Home = () => {
    const [activeFilters, setActiveFilters] = useState([]);

    function apply_filter() {
        const filter_list = document.getElementsByClassName("filter")
        let active_filters = []

        for (let i = 0; i < filter_list.length; ++i)
            if (!filter_list[i].checked) active_filters.push(filter_list[i].value)

        if (active_filters.length === filter_list.length) active_filters = []

        setActiveFilters(active_filters)
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col md="2">
                    <Categories apply_filter={apply_filter}/>
                </Col>
                <Col md="10">
                    <Shop activeFilters={activeFilters}/>
                </Col>
            </Row>
        </Container>
    );
}


export default Home