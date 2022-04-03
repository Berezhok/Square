
import allUrl from "../url";//[5000 элементов]
import React, { useState } from "react";
// const link = "https://via.placeholder.com/600/771796";
export const Square = () => {
    const [linkSquare,setLinkSquare] = useState("");
  return (
    allUrl.map( el => <img src={el}></img> )
    )
}

export default Square;
    
             

{/* <img src="https://via.placeholder.com/600/771796"></img> */}