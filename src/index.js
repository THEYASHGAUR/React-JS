import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const name = 'yash gaur';
const date = new Date(2022,3,11,14);
const time = date.getHours();
let greeting = "";

if(time >= 1 && time <12) {
    greeting = "Good Morning";
}
else if(time >= 12 && time <18){
  greeting = "good afternoon";
}
else{
  greeting = "good night";
}



const box1 = {
  backgroundColor:"lightblue",
  display:"inline-block",
  fontSize:"30px",
  padding:"15px",
  color:"white"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <App /> */}
    {/* <h1 style={{ height:"6px", width:"1000px", color:"blue",fontSize:"100px"}}>my name is {name}</h1> */}
    <p>{`Current time: ${time}`}</p>
    
    <div className="box" style={box1}>Hello Sir, {greeting}</div>

    
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
