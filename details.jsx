import React from "react"
export default function Details(props){
   return( 
    <>
    <div className="c" >  
        
        <p>{props.date}</p>
        <p>{props.setting}</p>
        <p>{props.artist}</p>
        <p>{props.type}</p></div>
    </>
  
   )
   
}