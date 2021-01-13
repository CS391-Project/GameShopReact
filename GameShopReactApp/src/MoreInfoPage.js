import React, { Component } from 'react';


import GetInfo from "./Components/GetInfo";
import data from "./data.json";


const productData = data.productList;





class MoreInfoPage extends Component {

    render() {


        return (

            <div>
                {/*send item attributes and get it in html format*/}
                <GetInfo product = {item()} />
            </div>


        );

    }
}


//retrun selected item
function item(){
    var id = localStorage.getItem("id")


    for(var i = 0; i< 4;i++){

        if (productData[i].id == id){
            return productData[i]
        }
    }
}

export default MoreInfoPage;