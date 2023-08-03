
import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";



function App() {
  const [mode, setMode]=useState('dark'); //whether dark mode or light mode  return (
    const togglemode = () =>{
      if(mode==='light'){
        setMode('dark');
        showAlert("Dark mode has been enabled","success")
      
      }
      else
      setMode ('light');
      showAlert("light mode has been enabled","success")
    }
  
    const[alert, setalert] = useState(null);

    const showAlert =(message,type) =>{
      setalert({
        msg: message,
        type:type
      })//here we set alert from null to an object

      //here we will make the alert to disappear within 3 sec
      setTimeout(() => {
        setalert(null)
        
      }, 3000);
      
    }
    <>
    <Navbar title = "TextUtils2" mode={mode} togglemode={togglemode}/>
    <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
<Alert alert={alert} /> 
    {/* <Router>

<div className="container my-3">
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> {/*so whenever someone comes on / they see texform*/}
         
          {/* </Route>
          
        </Switch> */}

{/* { /*<About/> */ }
{/* </div>
</Router> */}
</> 
//using router above we can  */}
}

export default App;
