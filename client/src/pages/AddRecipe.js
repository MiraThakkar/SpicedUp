import React, { useState, useEffect } from "react";
import { BackButton } from "../components/Button";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron"

import { Col, Row, Container } from "../components/Grid";

function Add() {
    const [recipeObject, setRecipeObject] = useState({})



    function handleInputChange(event) {
        const {name, value} = event.target;
        setRecipeObject({...recipeObject, [name]: value})
    };
    console.log(recipeObject);
    return (
        <Container fluid>

        
        <Row>
            <Col size="md-12">
                <BackButton />
                <Jumbotron>
                <h1>Add recipe from your kitchen</h1>
                </Jumbotron>
            </Col> 
        </Row>
        <Row>
            <Col size= "md-8" className = "mt-5">
                <div className = "col-md-2 ">
                    <hr />
                </div>
            <form className= "recipe-form">
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
               <Input
                onChange={handleInputChange}
                name="time"
                placeholder="Cooking time"
              />
               <Input
                onChange={handleInputChange}
                name="serving"
                placeholder="Serving"
              />
               <Input
                onChange={handleInputChange}
                name="ingredients"
                placeholder="Ingredients (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="direction"
                placeholder= "Direction (required)"
              />
              <p> Upload recipe image</p>
              <Input 
              type = "file"
              name = "image"
              accept = "image/*"
              multiple= "false"
              />        

              <FormBtn
                disabled= "false"
                // onClick={handleFormSubmit}
              >
                Save Recipe
              </FormBtn>
            </form>

            </Col>
        </Row>
        
            

        

        </Container>   

    );

}

export default Add;