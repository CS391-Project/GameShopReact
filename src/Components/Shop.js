import React from "react"
import {Button} from "reactstrap";
import MoreInfoPage from "./MoreInfoPage";
import data from "../Data/data.json";

const productData = data.productList;

function buttonAction(props){
    localStorage.setItem("id",props.id)
    {<MoreInfoPage/>}
    window.location.href="/moreInfoPage"
}

const Shop = (props) => {
    return (
        <div id="shop">
            <h2>Shop</h2>
            { productData.filter((product) =>!(props.activeFilters.includes(product.category))).map((product, i) => (
                <form key={i} id={product.name}>
                    <p>{product.name}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <img src={process.env.PUBLIC_URL + "/images/"+product.link} alt={product.name}/>

                    <Button variant="btn btn-success" onClick={()=>buttonAction(product)}>More Info</Button>

                    <br></br>
                    <br></br>
                </form>
            ))}
        </div>
    );
}

export default Shop
