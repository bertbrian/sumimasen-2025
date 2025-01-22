import TestiCarousel from "./TestiCarousel";

export default function WhatTheySay() {
  return (
    <section id="whattheysay">
      <h3 className="text-center text-4xl font-semibold lg:text-6xl">
        What they say
      </h3>

      <TestiCarousel />

      <div className="slider">
        <div className="list">
          <div className="item">
            <b>
              awalnya beli krna kemasanny lucu aesthetic bgtt tp wlaupun tipis
              ternyt super fleksibel bgtt
            </b>
            <p>- j****e</p>
          </div>
        </div>
      </div>
    </section>
  );
}
