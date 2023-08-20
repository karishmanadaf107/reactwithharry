import React,{useState} from 'react';
// import Alert from './Alert';

export default function TextForm (props){

  const handleUpClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("converted to uppercase","success");
  }

  const handleOnchange=(event)=>{
    setText(event.target.value);
    
  }

  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
     props.showAlert("converted to lowercase","success");

  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success");

  }

  const removeExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed","success");

  }

  const handleClearClick=()=>{
    let newText='';
    setText(newText);
     props.showAlert("text cleared","success");

  }



  const[text,setText]=useState("enter the text here")


    return(
<>

<div className='container' style={{Color:props.mode==='dark'?'white':'black'}}>
<h1 className='mb-4'>{props.heading}</h1>
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>

</div>

  
<div className="mb-3">
  {/* <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea> */}
</div>
<div>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} type="button" className="btn btn-success mx-3 my-1" onClick={handleCopy}>copy</button>

<button disabled={text.length===0} type="button" className="btn btn-warning mx-3 my-1" onClick={removeExtraSpaces}>remove extra spaces</button>

<button disabled={text.length===0} type="button" className="btn btn-danger mx-3 my-1" onClick={handleClearClick}>clear</button>
</div>

<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>your text summary</h2>
  <p>{text.split(/\S +/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters including spaces</p>
  <p> time required to read a word{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
  <h2>Preview</h2>
  <p>{text.length>0 ?text:"nothing to preview"}</p>
</div>


</>
)

}