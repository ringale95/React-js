import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("On click change"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handlelowclick = () =>{
      console.log("On click change"+ text);
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleonchange = (event) =>{ //we can use as event
        
        setText(event.target.value);// here using this we can enter our own new value in the textbox
    }
    //Below is use state so here we have text variable which contains value given in use state
    //and if we want to update it we can do using setText
    const[text,setText] = useState('Enter your text')
    //setText("new text"); //correct way to change the value of text
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
 <div className="mb-3"> 

    <textarea className="form-control"value = {text} onChange={handleonchange} id="myBox" rows="8"></textarea>
    
    </div> 
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowercase</button>


  </div>

  <div className="container my-3"> 
    <h2>Your text summary is</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes can be taken to read</p>
    <h2> Preview</h2>
    <p>{text}</p> 


  </div>

      
  </>
  )
}
