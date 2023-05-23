import React from "react";
import ImageContainerElement from "./ImageContainerElement";

import container1__image__card1 from "../../images/Art/image13.jpeg";
import container1__image__card2 from "../../images/Art/image2.jpeg";
import container2__image__card1 from "../../images/Art/image6.jpeg";
import container3__image_card1 from "../../images/Art/image5.jpeg";
import container3__image_card2 from "../../images/Art/image3.jpeg";
import photograph1 from "/Users/hammad/Documents/hashir/Hashir-Subhtdocs/reactScrimba/images/Photographs /image123.jpg";
import photograph3 from "/Users/hammad/Documents/hashir/Hashir-Subhtdocs/reactScrimba/images/Photographs /window -intothenight.jpg";

const images = [
  [container1__image__card1, container1__image__card2],
  container2__image__card1,
  [container3__image_card1, container3__image_card2],
  [photograph1, photograph3],
];

export default function Content() {
     const pics = images.map((images, i) => {
        return (
          <section key={i} className="columns is-full container">
            <ImageContainerElement images={images} />
          </section>
        );
      })
  return (
    <>
        {pics}
    </>
  );
}
