import React from 'react';
import {Link } from 'react-router-dom';
import '../styles/Card.css';
import cam from "../images/cam.png";

const Postview = () => {
    return (
        <div id="head">
            
                    <h1 id="ha">Instaclone</h1>
                    <Link to="/generatePost">
                        <img src={cam} width="25px" height="25px" id="cam"></img>
                    </Link>
        </div>
    )
}

export default Postview;