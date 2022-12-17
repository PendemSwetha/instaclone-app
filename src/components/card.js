import React, { useEffect } from "react";
import '../styles/Card.css';
import dots from "../images/dots.png";
import like from "../images/like.png";
import share from "../images/share.png";

const Card = (props) => {

    return (
        <div>

            <div id="card">
                <div id="dot-cont">
                    <div>
                        <h3>{props.item.name}</h3>
                        <p className="opac" >{props.item.location}</p>
                    </div>
                    <div id="dot">
                        <img src={dots} width="20em" height="20em"></img>
                    </div>
                </div>
                <div>
                    <img src={props.item.postImage} width="590px" height="300px"></img>
                </div>
                <div id="date-con">
                <img src={like} width="20px" height="20px" ></img>
                <img src={share} width="20px" height="20px" id="imgd"></img>
                <p id="date">{props.item.date}</p>
                </div>
                <p className="opac" id='like'>{props.item.likes} likes</p>
                <h3 id="des">{props.item.description}</h3>
            </div>

        </div>
    )
}

export default Card;

