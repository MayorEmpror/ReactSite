import container1__image__card1 from "../images/Art/image13.jpeg";

import container1__image__card2 from "../images/Art/image2.jpeg";
import container2__image__card1 from "../images/Art/image6.jpeg";
import container3__image_card1 from "../images/Art/image5.jpeg";
import container3__image_card2 from "../images/Art/image3.jpeg";
import photograph1 from "/Users/hammad/Documents/hashir/Hashir-Subhtdocs/reactScrimba/images/Photographs /image123.jpg";
import photograph4 from "/Users/hammad/Documents/hashir/Hashir-Subhtdocs/reactScrimba/images/Photographs /Imagecorrection.jpg";

export default [
  {
    coverImg: [container1__image__card1, container1__image__card2],
    date: ["1850", "1956"],
    setting: ["Indonesia", "Germany"],
    artist: ["Hashir", "Hashir"],
    type: ["Painting", "Painting"],
    BadgeText: ["32010", "49502"],
    Price : ["3010", "4902"]
  },

  {
    coverImg: container2__image__card1,
    date: "12-5-2000",
    setting: "Italia",
    artist: "Hashir",
    type: "Sketch",
    BadgeText: "1220",
    Price : "1000"
  },
  {
    coverImg: [container3__image_card1, container3__image_card2],
    date: ["12-6-2004", "12-7-1999"],
    setting: ["Russia", "England"],
    artist: ["Hashir", "Hashir"],
    type: ["Sketch", "Sketch"],
    BadgeText: ["32010", "402"],
    Price : ["7010", "5932"]
  },
  {
    coverImg: [photograph1, photograph4],
    date: ["1842", "1938"],
    setting: ["Èspaniol", "Fraçias"],
    artist: ["Hashir", "Hashir"],
    type: ["Painting", "Photograph"],
    BadgeText: ["32010", "40002"],
    Price : ["2010", "4952"]
  },
];
