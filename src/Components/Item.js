import React from "react"
import {Button, Col, Container, Row} from "reactstrap";
import {useHistory} from "react-router-dom";
import * as functions from "../functions";


const Item = (props) => {
    const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);

    return (
        <Container className='pb-4 mt-4 card'>
            <Row className="p-3">
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
                            <h2> Count: {props.item.count} </h2>
                            <Button onClick={() => (props.removeProductBasketPage(props.item.id))}
                                    className="mt-3 p-3 btn btn-block btn-danger btn-product text-nowrap ml-3"> Remove </Button>
                        </>
                        :
                        <>
                            <Row>
                                <Col md="6" xs="12">
                                    <Button onClick={() => functions.addToBasket()}
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
            <Row className='pt-4 p-3'>
                <p>{props.item.description}</p>
            </Row>
        </Container>
    );
}


export default Item