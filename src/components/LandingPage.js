
import React, { useState, useEffect } from "react";
import '../styles/App.css';
import Card from "./card";
import Postview from "./postview";

const LandingPage = () => {
  
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://insta-back-end.onrender.com/post").then((res) => {
        return res.json()
      }).then((info) => {
        console.log(info);
        setData(info);
      }).catch((err) => {
        console.log(err);
      })
    }, [])
    return (
    
        <div id="main">
          <Postview/>
          {data.length ? data.map((item,id) => {
            return ( 
        <Card key={id} item={item}/> )
          }) : null}
       
        </div>
    
      )
    
    }
    
    
    export default LandingPage;
    
  