import React, { useEffect, useState } from "react";

function Test(props)
{
    const[counter,SetCounter] = useState(0);
    useEffect(()=>{
        console.log("hello");
        SetCounter(1);
    },[props.visible])
        return(
            <>
                {counter}
            </>
        )
}

export default Test;