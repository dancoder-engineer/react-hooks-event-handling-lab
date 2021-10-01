// Code EyesOnMe Component Here
import React from "react";


function buttonBlurred(){
    console.log('Hey! Eyes on me!')
}

function buttonFocused(){
    console.log('Good!')
}

function EyesOnMe(props){
    return(
        <button onFocus={buttonFocused} onBlur={buttonBlurred}>Eyes on me</button>
    )
}

export default EyesOnMe