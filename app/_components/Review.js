import Video from "next-video";
import sumimasen_video from "/videos/sumimasen_video.mp4";

const Testimonies = [{}];

export default function Review() {
  return (
    <section id="review">
      <h3 className="text-center text-4xl font-semibold uppercase lg:text-6xl">
        Review
      </h3>

      <div className="overflow-hidden py-6">
        <div className="mx-auto w-4/5 rounded-lg md:w-2/5 lg:w-1/4">
          <Video src={sumimasen_video} autoplay muted loop controls />
        </div>
      </div>
    </section>
  );
}
