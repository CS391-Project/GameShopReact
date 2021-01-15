import React from "react"
import {Container} from "reactstrap";
import Item from "./Item";
import * as functions from "../functions";

const Basket = () => {
    const products = functions.getAllProducts();

    return (
        <Container>
            {!products.length
            && <h1>No Products</h1>
            }
            {products.map((item, i) => (
                <Item item={item} isBasketPage={true}/>
            ))}
        </Container>
    );
}

export default Basket
