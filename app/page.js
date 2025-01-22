import EmblaCarousel from "./_components/EmblaCarousel";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Modal from "./_components/Modal";
import Partner from "./_components/Partner";
import Review from "./_components/Review";
import WhatTheySay from "./_components/WhatTheySay";

export default function Page() {
  return (
    <>
      <Hero />
      <EmblaCarousel>
        <Modal />
      </EmblaCarousel>
      {/* <Review /> */}
      <WhatTheySay />
      <Partner />
      <Features />
    </>
  );
}
