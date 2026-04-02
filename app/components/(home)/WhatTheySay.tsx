"use client";
import testimonials from "@/app/db/testimonials.json";

import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import TestiCard from "./TestiCard";

export default function WhatTheySay() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 2 - 16;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);
  return (
    <section id="products">
      <div>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-md">
          <div className="reviews-box relative h-64">
            <motion.div
              className="absolute left-0 flex gap-4"
              ref={ref}
              style={{ x: xTranslation }}
            >
              {[...testimonials, ...testimonials].map((testi, idx) => (
                <TestiCard src={testi.src} key={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
