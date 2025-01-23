import testimonials from "@/app/db/testimonials.json";
import TestiCard from "./TestiCard";
import test from "node:test";

export default function WhatTheySay() {
  return (
    <section id="products">
      {/* <h3 className="text-center text-4xl font-semibold lg:text-6xl">
        What they say
      </h3> */}

      <div className="slider">
        <div className="list">
          <div className="item">
            {testimonials.map((testi) => (
              <TestiCard
                key={testi.name}
                name={testi.name}
                description={testi.description}
                rate={testi.rate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
