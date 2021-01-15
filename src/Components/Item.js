import React from "react"
import {Button, Col, Container, Row} from "reactstrap";
import {useHistory} from "react-router-dom";


const Item = (props) => {
    const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);

    const addToBasket = () => {
        const products = localStorage.getItem("product");

        if (products) {
            var text = products
            text += ','
            text += localStorage.getItem("id")
        } else {
            text = localStorage.getItem("id")
        }

        localStorage.setItem("product", text);

        alert('Added to basket !')
    }

    return (
        <Container className='pb-4'>
            <Row>
                <Col sm="12" md="6">
                    <img src={process.env.PUBLIC_URL + "/images/" + props.item.link} alt="Responsive image"/>
                </Col>
                <Col sm="12" md="6">
                    <h1> {props.item.name} </h1>
                    <h2> Price: {props.item.price} TL</h2>
                    <h2> Category: {props.item.category} </h2>
                    {props.isBasketPage
                        ?
                        <>
                            <Button onClick={() => (null)}
                                    className="mt-3 p-3 fullwidth btn btn-danger btn-product text-nowrap ml-3"> Remove </Button>
                        </>
                        :
                        <>
                            <Row>
                                <Col md="6" xs="12">
                                    <Button onClick={() => addToBasket()}
                                            className="p-3 mt-3 btn btn-info btn-product text-nowrap"> Add to
                                        Basket </Button>
                                </Col>
                                <Col md="6" xs="12">
                                    <Button onClick={() => goToPage('/')}
                                            className="p-3 mt-3 btn btn-info btn-product text-nowrap"> Back to
                                        Shop </Button>
                                </Col>
                            </Row>
                        </>
                    }
                </Col>
            </Row>
            <Row className='pt-4'>
                <p>{props.item.description}</p>

            </Row>
        </Container>
    );
}


export default Item