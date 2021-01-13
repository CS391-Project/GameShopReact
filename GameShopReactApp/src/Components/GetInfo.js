import React from "react"





function GetInfo(props){

    return (
        <div>

        <article>
        <br/>
        <br/>

        <h1> Name: {props.product.name} </h1>
        <h2>Price: {props.product.price} </h2>
        <h2> Category: {props.product.category} </h2>
        <br/>
        <article>
            <br/>
            <p >Description: {props.product.description}</p>
        </article>

        <br/>

            <img src={process.env.PUBLIC_URL + "/images/"+props.product.link} alt="Responsive image"/>


        <form action="http://localhost:3000/moreInfo.html" method="post">
            {/*calls add to basket function and alerts the user*/}
            <button type="button" onClick={()=>{AddToBasket(); alert('Added to basket');}}>Add to basket</button>

        </form>

    </article>
        </div>)

}


//add to bakset function
function AddToBasket() {

    const products = localStorage.getItem("product");

    if (products) {
        var text = products
        text += ','
        text += localStorage.getItem("id")
    } else {
        text = localStorage.getItem("id")
    }
    localStorage.setItem("product", text);


}

export default GetInfo