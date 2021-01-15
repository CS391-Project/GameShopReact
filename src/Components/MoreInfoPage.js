import React from "react"
import Item from "./Item";
import * as functions from "../functions";

const MoreInfoPage = () => {
    return (
        <Item item={functions.getItem()} isBasketPage={false}/>
    );
}

export default MoreInfoPage