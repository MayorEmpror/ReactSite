
import star from "../../images/Photographs /stars.jpg"
import React from "react"
export default function Imager({ data }) {
  const [icon, setIcon] = React.useState(false)
  function rectifier(){
    console.log(icon)
    return(
      setIcon(preVal => !preVal)
     )
  }
  if (!Array.isArray(data.coverImg)) {
      data.coverImg = [data.coverImg]
  }
  return (
    <>
      {
        data.coverImg.map((src, key) => (
          <>
            <div className="div --cover column is-two-fifths">
              <img src={src} alt="ContainerImage" />
             <div className="c" key={key}>
                <p>{data.date[key]}</p>
                <p>{data.setting[key]}</p>
                <p>{data.artist[key]}</p>
                <p>{data.type[key]}</p>
                <button onClick={rectifier} > <img src={star} alt="star" className="star"/></button>
                <div className="ViewTag">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="black"
                  >
                    view <br /> Price: ${data.Price[key]}
                  </a>
                  <br />
                  Views : {data.BadgeText[key]}
                  <br />
                </div>
              </div>
            </div>
            
          </>
          
        ))
      }
    </>
    );
  }
