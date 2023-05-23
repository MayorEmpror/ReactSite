import React from "react";
import Details from  "./details.jsx"
import data from "../data.js";
export default function ImageContainerElement({ images }) {
 
  return (
    <>
      {Array.isArray(images) ? (
        images.map((image, key) => {
          return (
            <div key={key} className="div--cover column is-two-fifths">
              <img src={image} alt="img" key={key} />
                {data.map((data,k)=>{
                  return <Details 
                  date={data.date}
                  setting = {data.setting}
                  key = {k}
                  artist = {data.artist}
                  type = {data.type}
                   />
                })}
            </div>
          );
        })
      ) : (
        <div className="column is-two-fifths">
          <img src={images} alt="tu es stupido" />
          {data.map((data,k)=>{
                  return <Details 
                  date={data.date}
                  setting = {data.setting}
                  key = {k}
                  artist = {data.artist}
                  type = {data.type}
                   />
                })}
        </div>
      )}
    </>
  );
      }
