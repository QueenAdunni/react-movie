import React from "react"
import { useState } from "react";

function hooks() {
    const [email,setEmail] = useState('pholake@gmail.com');
    const [message,setMessage] =useState('pholake@gmail.com');
    const [color, setColor] = useState('bg-warning')
    const changeEmail =(e)=>{
        setEmail(e.target.value);
    }

    const changeColor =(e)=>{
        setColor(e.target.value)
    }
  return (
    <div className= {color}>
      <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={color} onChange={changeColor}></textarea>
  <p>the email you entered is {email} and you left a message saying{message}</p>
</div>
    </div>
  )
};

export default hooks;
