import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Par from "./components/Par";
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Body2 from "./portfolio/body/Body";
import { useEffect, useState } from 'react';
import './App.css'
import { FlipFlopLoader } from "react-awesome-loaders";
import { CircleLoader } from "react-awesome-loaders";
function App() {
   const[loading,setLoading] = useState(false)
   useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
        setLoading(false)
     },4000)
   },[])

 
  return (
    <div>
      {
        loading ?
        <div className='App'  >
        {/* <HashLoader 
        color={"#ffa502"} 
        loading={loading} 
        size={50} 
        />
        Loading.... */}
  
            <CircleLoader
        meshColor={"#6366F1"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
       <FlipFlopLoader 
       desktopSize={"48px"} 
       mobileSize={"48px"} 
       textBeforeRing={'L'} 
       textAfterRing={'ADING...'}
       />
        </div>
        :
         
        <>
   <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
     <Navbar/> 
      <Par/> 
     <Body/>
     <Body2  />  
        </>
      }
    
     
    </div>
  );
}

export default App;
