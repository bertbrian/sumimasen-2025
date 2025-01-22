import Image from "next/image";

import maskot from "@/public/mascot-strong.png";

export const metadata = {
  title: "Certification",
};

export default function Page() {
  return (
    <section id="features" class="pt-4 lg:pt-12">
      <h3 class="text-center text-4xl font-semibold pb-12 lg:text-6xl lg:pb-24">
        Certification
      </h3>
      {/*<!-- Features Container -->*/}
      <div class="container mx-auto px-6 pb-14 lg:pb-32">
        <div class="flex flex-col justify-around space-y-16 text-center">
          {/*<!-- item 3 -->*/}
          <div class="item-container">
            <h3 class="feature-desc">IZIN DISTRIBUTOR ALKES KEMENKES RI</h3>
            <h5>22062301280030001</h5>
          </div>
          {/*<!-- item 1 -->*/}
          <div class="item-container">
            <h3 class="feature-desc">ISO</h3>
            <h5>13485</h5>
          </div>
          {/*<!-- item 2 -->*/}
          <div class="item-container">
            <h3 class="feature-desc">IZIN EDAR ALKES KEMENKES RI AKL</h3>
            <h5>21104320649</h5>
          </div>
        </div>
      </div>
      {/*<!-- Image -->*/}
      <Image
        width={400}
        height={400}
        quality={80}
        src={maskot}
        alt="sumimasen-mascott"
        class="mx-auto size-[40%] lg:size-1/4"
      />
    </section>
  );
}
