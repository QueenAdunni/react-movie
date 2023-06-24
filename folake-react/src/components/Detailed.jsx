import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";



function Detailed() {
  const [data, setData] =useState([]);
  const {movieId} =useParams();
   useEffect(() => {
     fetchData();
   }, []);
 
   const fetchData = async () => {
     try {
       const response = await fetch(`http://localhost:8000/api/post/${movieId}`, {
         headers: {
           "Content-Type": "application/json",
         },
       });
       const jsonData = await response.json();
       setData(jsonData);
     } catch (error) {
       console.error("error fetching data:", error);
     }
   };
  return (
    <div className="container-fluid col-xxl-8 py-5 hero-details" style={{backgroundImage: `url(${data.bg_image_link})`}}>
      <Header />

      <Link to={'/'}><i className=" bi bi-arrow-left ps-5" style={{color:"white"}}> Back</i></Link>
      <div className="container-fluid mt-5 ps-5">
        <div className="row">
          <div className="col-4">
            <div className="">
            <iframe width="320" height="430" src={data.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

          </div>

          <div className="col info">
            <div className="">
              <p className="blink" style={{color:"#ccff00"}}>Showing now</p>
              <h5 style={{color:"#ccff00"}}>New Episodes</h5>
              <h1 style={{color:"#fff"}}>{data.title}</h1>

              


              <ul className=" movies ">
                <li className="li1">Movies</li>
                <li className="li2">HD</li>
                <li>{data.genere}</li>
                <li><i className="bi bi-clock"></i>{data.mins} mins</li>
                <li><i className="bi bi-calendar3"></i>{data.year}</li>
                
              </ul>

            </div>

            <div className="fill">
            <ul className="share">
              <li><i class="bi bi-share-fill"></i></li>
              <li>share</li>
            </ul>

            <ul className="star">
              <li>Rate The Show</li>
              <li ><i class="bi bi-star-fill"></i> 7.0</li>
            </ul>

            

             <button><i class="bi bi-play-fill"></i>Play Now</button>
            </div>

            <p className="mt-5" style={{color:"#fff"}}>{data.description}</p>

             
          </div>

        </div>
        
      </div>
    </div>
  )
};

export default Detailed;





