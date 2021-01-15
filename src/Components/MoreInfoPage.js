import React from "react"
import {Button, Col, Container, Row} from "reactstrap";
import {useHistory} from "react-router-dom";
import data from "../Data/data.json";
import Item from "./Item";
const productData = data.productList;


const MoreInfoPage = (props) => {
    const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);

    // return selected item
    const getItem = () => {
        const id = localStorage.getItem("id")

        for (let i = 0; i < 4; i++) {
            if (productData[i].id === id) {
                return productData[i]
            }
        }
    }

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
        <Item item={getItem()} isBasketPage={false}/>
    );
}

export default MoreInfoPage