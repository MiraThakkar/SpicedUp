import React from "react";
import Card from "../components/Card";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function Recipes (){
    return (
        
        <Col size = "md-12">
            <button className = "btn btn-danger add-button" onClick = {("/add")}> 
                <Link to= "/add">
                    Add Recipe
                </Link>
            </button>
            <Card />
        </Col>
        

    )
    
}

export default Recipes;