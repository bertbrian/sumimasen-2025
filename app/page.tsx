import WhatTheySay from "./components/(home)/WhatTheySay";
import Features from "./components/(home)/Features";
import Hero from "./components/(home)/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      {/* <Review /> */}
      <Features />
      <WhatTheySay />
    </>
  );
}
