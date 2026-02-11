import heroImage from "@/assets/hero-image.png";

const LargeHero = () => {
  return (
    <section className="w-full h-[75vh] md:h-screen relative overflow-hidden -mt-16">
      {/* Replace the src below with your actual video URL */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}
        className="w-full h-full object-cover"
      >
        {/* <source src="/your-video.mp4" type="video/mp4" /> */}
      </video>
    </section>
  );
};

export default LargeHero;
