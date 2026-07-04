export default function AddDestinationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-[600px]">

        <h2 className="text-3xl font-bold mb-6">
          Add Destination
        </h2>

        <p className="text-gray-500 mb-8">
          Destination form will be built next.
        </p>

        <div className="flex justify-end">

          <button
            onClick={onClose}
            className="bg-red-500 text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}