// Code Keypad Component Here
import React from "react";

function boxChanged(){
    console.log("Entering password...")
}

function Keypad(props){
    return         <input type="password" onChange={boxChanged}></input>
}

export default Keypad