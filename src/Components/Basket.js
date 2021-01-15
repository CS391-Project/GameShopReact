import React, {useState} from "react"
import {Button, Col, Container, Row} from "reactstrap";
import Item from "./Item";
import * as functions from "../functions";

const Basket = () => {
    const totalPrice = functions.calculateBasketTotalPrice();
    const [products, setProducts] = useState(functions.getAllProducts());

    const checkOutBasketPage = () => {
        functions.checkOutBasket();
        setProducts([])
        alert("Checkout successful ! Thank you for using our website.")
    }

    const removeProductBasketPage = (productId) => {
        const remainingProducts = functions.removeFromBasket(productId);
        setProducts(remainingProducts)
    }

    return (
        <Container>
            {products.length
                ?
                <>
                    <Row>
                        {products.map((item, i) => (
                            <Item item={item} isBasketPage={true} removeProductBasketPage={removeProductBasketPage}/>
                        ))}
                    </Row>
                    <Row className="mt-5">
                        <Col md="12">
                            <h2 className="text-center">Checkout</h2>
                            <h3 className="text-center mt-4">Total Price: {totalPrice} TL</h3>
                            <Button onClick={() => (checkOutBasketPage())}
                                    className="mt-3 p-3 btn btn-success btn-block btn-product text-nowrap ml-3"> Checkout Now </Button>
                        </Col>
                    </Row>
                </>
                :
                <>
                    <h1>No Products</h1>
                </>
            }
        </Container>
    );
}

export default Basket
