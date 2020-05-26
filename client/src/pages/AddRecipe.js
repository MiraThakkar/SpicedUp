import React, { useState, useEffect } from "react";
import { BackButton } from "../components/Button";


import { Col, Row, Container } from "../components/Grid";

function Add() {
    const [recipeObject, setRecipeObject] = useState({})

    return (
        <Col size="md-12">
            <BackButton />
        </Col>

        

    );

}

export default Add;