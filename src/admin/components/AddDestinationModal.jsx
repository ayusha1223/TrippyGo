import DestinationForm from "./DestinationForm";

export default function AddDestinationModal({
  onClose,
  destinationId,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-8">

      <div className="bg-[#F8FAFC] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-[#0F4C81]">
  {destinationId ? "Edit Destination" : "Add Destination"}
</h2>

          <button
            onClick={onClose}
            className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600"
          >
            Close
          </button>

        </div>

        <DestinationForm
  destinationId={destinationId}
  onClose={onClose}
/>

      </div>

    </div>
  );
}