"use client";

import testimonials from "@/app/db/testimonials.json";
import TestiCard from "./TestiCard";
import {
  motion,
  animate,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function WhatTheySay() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section id="products">
      {/* <h3 className="text-center text-4xl font-semibold lg:text-6xl">
        What they say
      </h3> */}
      <AnimatePresence>
        <div>
          <div className="max-w-7xl  mx-auto rounded-md">
            <motion.div
              className="flex gap-4 "
              ref={ref}
              style={{ x: xTranslation }}
            >
              {[...testimonials, ...testimonials].map((testi, idx) => (
                <TestiCard src={testi.src} key={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}
