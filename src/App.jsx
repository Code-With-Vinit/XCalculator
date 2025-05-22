import { useState } from 'react';
import "./App.css";

function App() {

  const [answer,setAnswer]=useState("");

  const handleClick=(e)=>{
      setAnswer(answer+e.target.value);
  }
  const handleClear=()=>{
      setAnswer("");
  }
  const handleEvaluation=()=>{
      // setAnswer(eval(answer));
      try {
        // const sanitized = answer.replace(/^0+/, ''); // remove leading zeros
          setAnswer(eval(answer).toString());
      } catch {
        setAnswer("Error");
      }
  }
 
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <h1>React Calculator</h1>
      <input style={{width:"180px"}} type="text" value={answer} readOnly/>

      <div style={{fontSize:"40px", color:"grey",margin:"10px"}}>
        {answer}
      </div>

      <div style={{width:"400px", height:"400px", display:"flex", flexWrap:"wrap", gap:"20px"}}>
        <button  onClick={(e)=>{handleClick(e)}} value="7" className="button">7</button>
        <button onClick={(e)=>{handleClick(e)}} value="8" className="button">8</button>
        <button onClick={(e)=>{handleClick(e)}} value="9" className="button">9</button>
        <button onClick={(e)=>{handleClick(e)}} value="+" className="button">+</button>
        <button onClick={(e)=>{handleClick(e)}} value="4" className="button">4</button>
        <button onClick={(e)=>{handleClick(e)}} value="5" className="button">5</button>
        <button onClick={(e)=>{handleClick(e)}} value="6" className="button">6</button>
        <button onClick={(e)=>{handleClick(e)}} value="-" className="button">-</button>
        <button onClick={(e)=>{handleClick(e)}} value="1" className="button">1</button>
        <button onClick={(e)=>{handleClick(e)}} value="2" className="button">2</button>
        <button onClick={(e)=>{handleClick(e)}} value="3" className="button">3</button>
        <button onClick={(e)=>{handleClick(e)}} value="*" className="button">*</button>
        <button onClick={(e)=>{handleClear(e)}} value="C" className="button">C</button>
        <button onClick={(e)=>{handleClick(e)}} value="0" className="button">0</button>
        <button onClick={(e)=>{handleEvaluation(e)}} value="=" className="button">=</button>
        <button onClick={(e)=>{handleClick(e)}} value="/" className="button">/</button>


      </div>

    </div>
  )
}

export default App
