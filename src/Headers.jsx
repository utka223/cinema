import React from "react";
import "./Headers.css";
import { useState, useEffect } from "react";

function Headers() {

    return(
        <>
        <header>
            <h1>Logo</h1>
            <span>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </span>
            <span><input type="text" placeholder="Search..." /></span>
        </header>
    </>
    )

}

export default Headers;