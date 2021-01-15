import React from "react"
import {Button, Col, Container, Row} from "reactstrap";
import Item from "./Item";
import data from "../Data/data.json";

const Basket = () => {
    return (
        <Container>
            {getAllProducts().map((item, i) => (
                <Item item={item} isBasketPage={true}/>
            ))}
        </Container>
    );
}

//add to basket function
function getAllProducts() {
    const productIDs = localStorage.getItem("product")
    const products = []

    if (productIDs) {
        for (let productId of productIDs.split(',')) {
            const data = getProductDataAsObject(productId)
            products.push(data)
        }
        return products;
    }
    return {};
}

function getProductDataAsObject(productId) {
    const productData = data.productList;

    for (let product of productData) {
        if (productId === product.id) {
            return product;
        }
    }
}

function removeFromBasket(productId){
 /*   const allProducts = getProducts();

    if (allProducts.includes(productId.toString())) {
        allProducts.splice(allProducts.indexOf(productId.toString()), 1);
    }
    const mergedProducts = allProducts.join(',');
    localStorage.setItem("product",mergedProducts);

    // showBasket();
    // displayTotal() */
}

export default Basket
