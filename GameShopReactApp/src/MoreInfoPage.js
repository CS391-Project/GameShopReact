import React, { Component } from 'react';


import GetInfo from "./Components/GetInfo";
import data from "./data.json";

import Footer from "./Components/Footer";
import Header from "./Components/Header";


const productData = data.productList;




class MoreInfoPage extends Component {

    render() {

        return (
            <div>
                <Header />
                <br/>
                <br/>
                <br/>
                <br/>
                <GetInfo product = {item()} />
                <Footer/>
            </div>


        );
    }
}



function item(){
    var id = localStorage.getItem("id")


    for(var i = 0; i< 4;i++){

        if (productData[i].id == id){
            return productData[i]
        }
    }
}

export default MoreInfoPage;