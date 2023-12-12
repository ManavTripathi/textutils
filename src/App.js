import Navbar from './compnents/Navbar';
import './App.css';
import TextForm from './compnents/TextForm';
import React, { useState } from 'react'
import Alert from './compnents/Alert';
import About from './compnents/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const[mode , setMode]= useState('light');
  const[modetext, setModetext]=useState('Enable Dark Mode');
  const[alert,setAlert]=useState(null);
  

  const showalert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleblue=()=>{
    if(mode==='light'){
      setMode('primary');
      document.body.style.backgroundColor='lightblue'
      setModetext('Enable Light Mode');
      showalert("Blue Mode has been Enabled","success");
    }
    else{
      setMode('light');
      setModetext('Enable Blue Mode');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled","success");
    }
  }
  const toggleMode =()=>{
   
    if (mode==='light'){
      setMode('dark');
      setModetext('Enable Light Mode');
      document.body.style.backgroundColor='#343a40'
      showalert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      setModetext('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>

<BrowserRouter>
    
    
<Navbar tittle="TextUtils"hometext="Home" modetext={modetext} mode={mode} toggleblue={toggleblue} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          <Route  exact path="/" element={<TextForm showalert={showalert} heading="Enter the Text to Analyse" mode={mode} />}>
          
          </Route>
        </Routes>

  </div>
  </BrowserRouter>
  
  </>
   
  );
}

export default App;