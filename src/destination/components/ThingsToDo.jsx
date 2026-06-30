export default function ThingsToDo({ things }) {
  return (
    <section className="max-w-7xl mx-auto px-10 py-14">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-4xl font-bold text-[#1A5F7A]">
            Top Things To Do
          </h2>

          <p className="text-gray-500 mt-2">
            Experience the best attractions and activities.
          </p>
        </div>

        <button className="text-[#1A5F7A] font-semibold">
          View All
        </button>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {things.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >

            <img
              src={
                item.image ||
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
              }
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}