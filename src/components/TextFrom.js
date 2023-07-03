import { useState } from 'react';


export default function TextFrom(props) {
     const handleUpClick =()=>{
        // console.log("upper case click" + text);
        let newText = text.toUpperCase();
        setText(newText);
     }
     const handleOnchange =(Event)=>{
        // console.log("On change");
        setText(Event.target.value)
     }
    const [text, setText] = useState();
  return (
    <>
    <h1>{props.heading}</h1>
  
  <div className="mb-3">
   
    <textarea className="form-control" id="myBox" value ={text} onChange={handleOnchange}  rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick} >Convert to Upper case</button>
  </>
  )
}
