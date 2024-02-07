import React, { useState } from "react";

function App(){
    const[count,setCount]=useState(0)

function increase(){
    setCount(count+1);
}

function dicrease(){
    setCount(count-1);
}
return(
    <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={dicrease}>-</button>
    </div>
);
}
export default App;