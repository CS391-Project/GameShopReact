import React from "react"
import {Media, Button} from "reactstrap";
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';
import * as functions from "../functions";

const Shop = (props) => {
    const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);
    const productData = data.productList;

    const goToMoreInfoPage = (props) => {
        localStorage.setItem("id", props.id)
        goToPage('moreInfoPage')
    }

    return (
        <div id="shop">
            <h2>Shop</h2>
            <Container>
                <Row>
                    {!productData.length
                    && <h1>No Products</h1>
                    }

                    {productData.filter((product) => !(props.activeFilters.includes(product.category))).map((product, i) => (
                        <Col sm="6" md="4">
                            <Row className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/" + product.link}
                                     alt={product.name} className="img-responsive p-3"/>
                                <div className="caption">
                                    <Row>
                                        <Col md="6" xs="6" sm="6">
                                            <h3>{product.name}</h3>
                                        </Col>
                                        <Col md="6" xs="6" sm="6" className="price">
                                            <h3>
                                                <label>{product.price} TL</label>
                                            </h3>
                                        </Col>
                                    </Row>
                                    <p><b>Category:</b> {product.category}</p>
                                </div>
                                <Row className='fullWidth'>
                                    <Col md="6">
                                        <Button onClick={() => goToMoreInfoPage(product)} className="mt-3 btn btn-info btn-product text-nowrap" >More Info </Button>
                                    </Col>
                                    <Col md="6">
                                        <Button onClick={() => functions.addToBasket(product=product)} className="mt-3 btn btn-success btn-product text-nowrap">Add to Basket </Button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Shop
