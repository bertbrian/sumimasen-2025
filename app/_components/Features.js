import Image from "next/image";

import certifiedImg from "@/public/features/certified-icon.svg";
import extrasafeImg from "@/public/features/extrasafe-icon.svg";
import naturalImg from "@/public/features/natural-icon.svg";

export default function Features() {
  return (
    <section id="features" className="pt-8">
      {/*<!-- Features Container -->*/}
      <div className="container mx-auto px-6 pb-14 lg:pb-32">
        <div className="flex flex-col justify-around space-y-16 text-center md:flex-row md:space-y-0">
          {/*<!-- item 3 -->*/}
          <div className="item-container">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image
                src={extrasafeImg}
                alt="extra safe"
                className="size-full"
              />
            </div>
            <h3 className="feature-desc">Extra Safe</h3>
          </div>
          {/*<!-- item 1 -->*/}
          <div className="item-container">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image src={certifiedImg} alt="certified" className="size-full" />
            </div>
            <h3 className="feature-desc">ISO & AKL Certified</h3>
          </div>

          {/*<!-- item 2 -->*/}
          <div className="item-container">
            <div className="flex items-center justify-center h-24 mb-6">
              <Image src={naturalImg} alt="natural" className="size-full" />
            </div>
            <h3 className="feature-desc">Natural Latex Color</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
