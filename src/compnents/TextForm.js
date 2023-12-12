import React , {useState} from 'react';


export default function TextForm(props){
    const[text , SetText]=useState('');
    const handleUpclick = ()=>{
       // console.log("UpperCase was clicked "+ text);
        let newtext=text.toUpperCase();
        SetText(newtext);
        props.showalert("Converted to uppercase","success");
       // useState(text.toLocaleUpperCase)
    }
    const handleLoclick = ()=>{
        // console.log("UpperCase was clicked "+ text);
         let newtext=text.toLowerCase();
         SetText(newtext);
         props.showalert("Converted to lowercase","success");
        // useState(text.toLocaleUpperCase)
     }
     const Speak = ()=>{
        // console.log("UpperCase was clicked "+ text);
         let msg= new SpeechSynthesisUtterance();
         msg.text=text;
         window.speechSynthesis.speak(msg);
     }
     const handlecopy =()=>{
        let text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Test Copied to clipboard","success")
     }
    const handleonchange =(event)=>{
       // console.log("onchange");
        SetText(event.target.value);
    }
    const handleeraze =()=>{
        SetText(" ");
        props.showalert("Test Cleared","success")
    }
    // text="abba-dabba-jabba";  //Wrong way to update
    // setText("Abba -dabba- Jabba"); //right way to update
    return(
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}} >
           
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} style={{backgroundColor : props.mode==='dark' ?'grey':'wheat' ,color:props.mode==='dark'?'white':'black'}} rows="7" ></textarea> </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to UpperCase</button>
        <button className="btn btn-success mx-1" onClick={handleLoclick}>Convert to LoverCase</button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy the text </button>
        <button className="btn btn-danger mx-1" onClick={handleeraze}>Erase the text </button>
        <button className="btn btn-warning mx-1" onClick={Speak}> Speak</button>
       

        </div>

        <div className="container my-3"  style={{color : props.mode==='dark'?'white':'black'}}>
            <h3>Your Text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length}  Minutes to read </p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter Text to Preview"}</p>
        </div>



        </>
    )
}
