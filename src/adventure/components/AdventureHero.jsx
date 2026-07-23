export default function AdventureHero() {
  return (
    <section
      className="
        relative mb-10 h-[420px]
        overflow-hidden rounded-3xl
      "
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
        alt="Mountain landscape in Nepal"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div
        className="
          relative flex h-full items-center
          px-8 md:px-16
        "
      >
        <div className="max-w-3xl text-white">
          <p className="mb-3 uppercase tracking-[6px] text-white/80">
            Explore Nepal
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Adventure
            <br />
            Explorer
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/90 md:text-xl md:leading-9">
            Discover Nepal&apos;s most exciting adventures,
            from Himalayan trekking and paragliding to rafting,
            jungle safaris and mountain biking.
          </p>
        </div>
      </div>
    </section>
  );
}