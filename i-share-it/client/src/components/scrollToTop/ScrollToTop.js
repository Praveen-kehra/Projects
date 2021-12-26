import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from './styles.js';

const ScrollToTop = () => {
    const classes = useStyles();

    window.onscroll = function() {scrollFunction()};
    

    const handleButton = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function scrollFunction() {
        var mybutton = document.getElementById("btn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            
        } else {
            mybutton.style.display = "none";
        }
    }

    return (
        <button id="btn" onClick={handleButton} className={classes.button}>
            Top
        </button>
    )
}

export default ScrollToTop;