import React from "react"
import {Col, Container, Row} from "reactstrap";


const GetInfo = (props) => {
    return (
        <Container>
            <Row>
                <Col sm="12" md="6">
                    <img src={process.env.PUBLIC_URL + "/images/"+props.product.link} alt="Responsive image"/>
                </Col>
                <Col sm="12" md="6">
                    <h1> Name: {props.product.name} </h1>
                    <h2>Price: {props.product.price} TL</h2>
                    <h2> Category: {props.product.category} </h2>
                    <button type="button" className='mt-5' onClick={()=>{AddToBasket(); alert('Added to basket');}}>Add to basket</button>
                </Col>
            </Row>
            <Row className='pt-4'>
                <p>{props.product.description}</p>
            </Row>
        </Container>
    );
}

//add to basket function
function AddToBasket() {

    const products = localStorage.getItem("product");

    if (products) {
        var text = products
        text += ','
        text += localStorage.getItem("id")
    } else {
        text = localStorage.getItem("id")
    }
    localStorage.setItem("product", text);
}

export default GetInfo