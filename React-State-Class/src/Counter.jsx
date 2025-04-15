import { useState } from "react";

function init() {
    return Math.random();
}

export default function Counter(){
    // let [stateVariable, setStateVariable] = useState(0);
    let[count, setCount] = useState(init);  // Only use for Initialization
    console.log("Component is renderd!");
    console.log(`count = ${count}`);

    let incCount = () =>{
        setCount((currCount)=>{
           return currCount + 1;
        });
        setCount((currCount)=>{
            return currCount + 1;
         });
    };

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increse Count</button>
        </div>
    );
}