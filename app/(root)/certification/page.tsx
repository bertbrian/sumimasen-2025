import Image from "next/image";

import maskot from "@/public/mascot-strong.png";

export const metadata = {
  title: "Certification",
};

export default function Page() {
  return (
    <section id="features" className="pt-4 lg:pt-12">
      <h3 className="text-center text-4xl font-semibold pb-12 lg:text-6xl lg:pb-24">
        Certification
      </h3>
      {/*<!-- Features Container -->*/}
      <div className="container mx-auto px-6 pb-14 lg:pb-32">
        <div className="flex flex-col justify-around space-y-16 text-center">
          {/*<!-- item 3 -->*/}
          <div className="item-container">
            <h3 className="feature-desc">IZIN DISTRIBUTOR ALKES KEMENKES RI</h3>
            <h5>22062301280030001</h5>
          </div>
          {/*<!-- item 1 -->*/}
          <div className="item-container">
            <h3 className="feature-desc">ISO</h3>
            <h5>13485</h5>
          </div>
          {/*<!-- item 2 -->*/}
          <div className="item-container">
            <h3 className="feature-desc">IZIN EDAR ALKES KEMENKES RI AKL</h3>
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
        className="mx-auto size-[40%] lg:size-1/4"
      />
    </section>
  );
}
