import React, {Component} from 'react';
import GetInfo from "./GetInfo";
import data from "../Data/data.json";

const productData = data.productList;

// return selected item
function item() {
    var id = localStorage.getItem("id")

    for (var i = 0; i < 4; i++) {
        if (productData[i].id === id) {
            return productData[i]
        }
    }
}

const MoreInfoPage = () => {
    return (
        <div>
            {/*send item attributes and get it in html format*/}
            <GetInfo product={item()}/>
        </div>
    );
}

export default MoreInfoPage



