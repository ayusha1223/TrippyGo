function Stats() {
  const stats = [
    { value: "50+", label: "Destinations" },
    { value: "200+", label: "Hotels" },
    { value: "30+", label: "Adventures" },
    { value: "10K+", label: "Travellers" },
  ];

  return (
    <section className="relative -mt-20 z-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl py-10 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-4xl font-bold text-blue-700">
                {item.value}
              </h2>

              <p className="uppercase text-gray-500 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;