import React from "react"
import {Button} from "reactstrap";
import data from "../Data/data.json";
import { useHistory } from "react-router-dom";

const Shop = (props) => {
    const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);
    const productData = data.productList;

    const buttonAction = (props) => {
        localStorage.setItem("id", props.id)
        goToPage('moreInfoPage')
    }

    return (
        <div id="shop">
            <h2>Shop</h2>
            {productData.filter((product) => !(props.activeFilters.includes(product.category))).map((product, i) => (
                <div>
                    <p>{product.name}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <img src={process.env.PUBLIC_URL + "/images/" + product.link} alt={product.name}/>

                    <Button variant="btn btn-success" onClick={() => buttonAction(product)}>More Info</Button>

                    <br></br>
                    <br></br>
                </div>
            ))}
        </div>
    );
}

export default Shop
