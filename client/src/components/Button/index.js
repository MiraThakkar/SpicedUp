import React from "react";
import { Link } from "react-router-dom";

export function BackButton() {
    return (
        <div className="btn-container">
            <button className="btn-default mt-3 mb-3" onClick={("/")} >
            <Link to="/">
            ← Back to Recipes
            </Link>
            
            </button>
        </div>
    );

};