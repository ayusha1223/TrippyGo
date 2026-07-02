import { FaSave } from "react-icons/fa";

export default function SaveSettingsButton() {

  function handleSave() {
    alert("Settings saved successfully!");
  }

  return (

    <div className="flex justify-end">

      <button
        onClick={handleSave}
        className="
          bg-[#1A5F7A]
          hover:bg-[#14495F]
          text-white
          px-10
          py-4
          rounded-2xl
          font-bold
          text-lg
          flex
          items-center
          gap-3
          shadow-lg
          transition
        "
      >

        <FaSave />

        Save Settings

      </button>

    </div>

  );
}