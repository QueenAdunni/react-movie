import React from "react"


function Card() {
   
     

    

     
  return (
<div>
  
      <div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 bg-success">
        <h1>name of student: {props.name}</h1>
        <h2>location:  {props.location}</h2>
        <h3>email: {props.email}</h3>
        <button className="btn btn-danger" onClick={welcome}>click me</button>
     </div>
    </div>
  </div>
</div>
</div>
  )
};

export default Card;
