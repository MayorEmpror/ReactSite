import React from "react";
import data from "../data";
import Card from "./Card";
export default function Content() {
  return (
    <>
      {data.map((rdata, index) => (
        <section key={index} className="container  columns is-full">
          <Card data={rdata} />
        </section>
      ))}
    </>
  );
}
