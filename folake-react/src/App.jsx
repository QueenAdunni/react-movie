import { useState, useEffect } from "react";

import{Link,useNavigate} from "react-router-dom"
import Header from './components/Header'
import Footer from "./components/Footer"
import spiders from './assets/images/spiderman.png'
import punishs from './assets/images/punisher.png'
import airs from './assets/images/airbender.png'
import avarters from './assets/images/avater.png'
import beasts from './assets/images/beauty.png'
import frozens from './assets/images/frozen.png'
import dis from './assets/images/disney.png'
import mav from './assets/images/marvel.png'
import ddc from './assets/images/dc.png'
import stars from './assets/images/star.png'
import hungers from './assets/images/hunger.png'
import plans from './assets/images/planner.png'
import wazirs from './assets/images/wazir.png'
import parties from './assets/images/party.png'
import spideers from './assets/images/spider3.png'
import nasas from './assets/images/nasa.png'
import Detailed from "./components/detailed";



import "./App.css";


function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [selectedMovies,setSelectedMOvis] = useState([null]);
  const navigateToCard =(movieId)=>{
    navigate(`/detailed/${movieId}`)
  
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/post/", {
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
    <>
      <div className="container-fluid col-xxl-12 px-5 py-5 hero">
        <Header />
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6"></div>
          <div className="col-lg-6">
            <h4 className="">Filmagent </h4>
            <h1>
              Ulimited <span style={{ color: "#ccff00" }}>Entertainment</span>,{" "}
              <br /> Movies, TVs shows, & More.
            </h1>
            <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              
            </h2>

            <ul>
              <li className="li1">Movie</li>
              <li className="li2">HD</li>
              <li>Action,Drama</li>
              <li><i class="bi bi-calendar3"></i> 2023</li>
            </ul>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button">
                
                <i class="bi bi-play-fill"></i> PLAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-light upcoming p-5">
        <h5 style={{ color: "#ccff00" }}>ONLINE STREAMING</h5>

        <div className="tag">
          <h2>Upcoming Movies</h2>

          <ul>
            <li>Movies</li>
            <li>Tvs Shows</li>
            <li>Anime</li>
          </ul>

        </div>

        <div class="pt-5 text-light">
          <div class="row gx-5">

          {data.map((item) => (
            
            <div class="col-3">
            
            <div onClick={()=>navigateToCard(item.id)}>
              <img src={item.image_link} className="card-img-top" alt="" style={{width: '295px', height: '390px'}} />
              

              <div className="title">
                <p key={item.id}>{item.title}</p>
                <p >{item.year}</p>
              </div>
                
              <div className="type">
                <i class="bi bi-badge-hd"></i>
                <p><i class="bi bi-clock"></i>{item.mins} min</p> 
                <p><i class="bi bi-star-fill"></i>{item.ratings}</p>
              </div>
              </div>
            </div>
          
          ))}
        </div>
      </div>



    <div className="mt-5">
  <ul className="slide">
    <li>  <img src={spiders}  alt="Logo"/></li>
    <li>  <img src={punishs}  alt="Logo"/></li>
    <li>  <img src={airs}  alt="Logo"/></li>
    <li>  <img src={avarters}  alt="Logo"/></li>
    <li>  <img src={beasts}  alt="Logo"/></li>
    <li>  <img src={frozens}  alt="Logo"/></li>
    <li>  <img src={spiders}  alt="Logo"/></li>
    <li>  <img src={punishs}  alt="Logo"/></li>
    <li>  <img src={airs}  alt="Logo"/></li>
    <li>  <img src={avarters}  alt="Logo"/></li>
    <li>  <img src={beasts}  alt="Logo"/></li>
    <li>  <img src={frozens}  alt="Logo"/></li>
    <li>  <img src={spiders}  alt="Logo"/></li>
    <li>  <img src={punishs}  alt="Logo"/></li>
    <li>  <img src={airs}  alt="Logo"/></li>
    <li>  <img src={avarters}  alt="Logo"/></li>
    <li>  <img src={beasts}  alt="Logo"/></li>
     </ul>
</div>

<div className="content">
      <img src={dis}alt="" />
      <img src={mav} alt="" />
      <img src={ddc}alt="" />
      <img src= {stars} alt="" />
</div > 

<div className="mt-5">
  <ul className="slide">
    <li>  <img src={hungers}  alt="Logo"/></li>
    <li>  <img src={plans}  alt="Logo"/></li>
    <li>  <img src={wazirs}  alt="Logo"/></li>
    <li>  <img src={parties}  alt="Logo"/></li>
    <li>  <img src={spideers}  alt="Logo"/></li>
    <li>  <img src={nasas}  alt="Logo"/></li>
    <li>  <img src={hungers}  alt="Logo"/></li>
    <li>  <img src={plans}  alt="Logo"/></li>
    <li>  <img src={wazirs}  alt="Logo"/></li>
    <li>  <img src={parties}  alt="Logo"/></li>
    <li>  <img src={spideers}  alt="Logo"/></li>
    <li>  <img src={nasas}  alt="Logo"/></li>
  </ul>
</div>

<div class="container mt-5 text-center"style={{color:'#ccff00'}}>
  <ul className="number">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>....</li>
    <li>64</li>

   
  </ul>
</div>



         
   <div class="text-center">
    <div class="col-lg-6 mx-auto">
    <h6 className="lead mt-4">Filmagnet is an online movie streaming platform that offers pirated content that is not released. 
    It has a huge collection of latest movies and films that still not available on the market and YouTube. 
    You can watch and download all contents free of costs, but they are illegal, so you have to take some precautions.
     It is not available in all countries so you can use VPN and choose a location with access to Filmagnet. 
       Here, we will discuss the Filmagnet.</h6>
    </div>
  </div>  
          
 
  <Footer/>

    


 </div>
 

      
    </>
  );
}

export default App;


























      {/* <div className="container-fluid text-center ">
        <div className="row gx-5">
          {data.map((item) => (
            <div className="col-4 text-light">
              <div className="p-3">
                <div className="mt-5" style={{ width: "18rem" }}>
                  <img src={item.image_link} alt="" />

                  <div>
                    <>
                      <h5 key={item.id}>{item.title}</h5>
                      <h6>{item.description}</h6>
                      <a href="">Read more...</a>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link to="/auth"> Auth</Link>
          <button className="btn btn-primary" onClick={navigateToCard}>
            go to Card
          </button> 
        </div>
      </div> */}