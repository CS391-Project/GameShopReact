import React from "react"
import {Button, Container, Row} from "reactstrap";
import data from "../Data/data.json";

const categoryData = data.categoryList;

const Categories = (props) => {
    return (
        <Container fluid={true} id="categories">
            <h2>Categories</h2>
            {categoryData.map((category, i) => (
                <Row key={i} className="form-check">
                    <input type="checkbox" className="form-check-input filter" id={category} value={category}/>
                    <label className="form-check-label" htmlFor={category}>{category}</label>
                </Row>
            ))}
            <Row className='pt-3'>
                <Button onClick={props.apply_filter}>Apply Filter</Button>
            </Row>

        </Container>
    );
}

export default Categories
