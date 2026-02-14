const LargeHero = () => {
  return (
    <section className="w-full h-[75vh] md:h-screen relative overflow-hidden -mt-16 bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/kashmir-bloom-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default LargeHero;
