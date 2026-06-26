export default function StatCard({
  icon,
  value,
  title,
  color = "bg-[#1A5F7A]/10",
}) {
  return (
    <div
      className="
      bg-white/70
      backdrop-blur-lg
      border
      border-white
      rounded-2xl
      shadow-lg
      p-6
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >
      <div
        className={`
          w-14
          h-14
          rounded-xl
          ${color}
          flex
          items-center
          justify-center
          text-2xl
          text-[#1A5F7A]
        `}
      >
        {icon}
      </div>

      <h2 className="text-4xl font-bold text-[#1A5F7A] mt-6">
        {value}
      </h2>

      <p className="text-gray-600 font-medium mt-2">
        {title}
      </p>
    </div>
  );
}