import React from "react"
import {Button} from "reactstrap";
import data from "../Data/data.json";

const categoryData = data.categoryList;

const Categories = (props) => {
    return (
        <div id="categories">
            <h2>Categories</h2>
            {categoryData.map((category, i) => (
                <div key={i}>
                    <input type="checkbox" className="filter" id={category} value={category}></input>
                    <label htmlFor={category}>{category}</label>
                    <br></br>
                </div>
            ))}
            <Button onClick={props.apply_filter}>Apply Filter</Button>
        </div>
    );
}

export default Categories
