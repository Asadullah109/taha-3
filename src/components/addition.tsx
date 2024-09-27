"use client"


import { useState } from "react";


function Addition() {

let [myValue, setMyValue] = useState(0)

  return (
    <>
    <h1>{myValue}</h1>

    <button onClick={()=>{setMyValue(myValue = myValue + 1)}}>Add</button>
    </>
  )
}

export default Addition