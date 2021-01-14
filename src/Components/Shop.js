import React from "react"
import {Media, Button} from "reactstrap";
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';

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
            <Container>
                <Row>
                    {productData.filter((product) => !(props.activeFilters.includes(product.category))).map((product, i) => (
                        <Col sm="6" md="4">
                            <Row className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/" + product.link}
                                     alt={product.name} className="img-responsive p-3"/>
                                <div className="caption">
                                    <Row>
                                        <Col md="6" xs="6">
                                            <h3>{product.name}</h3>
                                        </Col>
                                        <Col md="6" xs="6" className="price">
                                            <h3>
                                                <label>{product.price} TL</label>
                                            </h3>
                                        </Col>
                                    </Row>
                                    <p><b>Category:</b> {product.category}</p>
                                </div>
                                <Row className='fullwidth'>
                                    <Col md="6">
                                        <Button  onClick={() => buttonAction(product)} className="btn btn-primary btn-product text-nowrap" ><span
                                            className="glyphicon glyphicon-thumbs-up"></span> More Info </Button>
                                    </Col>
                                    <Col md="6">
                                        <Button href="#" className="btn btn-success btn-product text-nowrap"><span
                                            className="glyphicon glyphicon-shopping-cart"></span> Add to Basket </Button>
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
