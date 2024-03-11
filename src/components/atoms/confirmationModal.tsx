// components/molecules/ConfirmationModal.tsx
import React, { useState } from "react";
import Spinner from "./Spinner"; // Import Spinner component

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => Promise<void>; // Update onConfirm to return a Promise
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleConfirm = async () => {
    setLoading(true); // Set loading to true before calling onConfirm
    await onConfirm(); // Wait for onConfirm to complete
    setLoading(false); // Set loading to false after onConfirm completes
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
      <p className="text-xl">{message}</p>
      <div className="mt-4 flex justify-center">
        {loading ? ( // Conditionally render Spinner if loading is true
          <Spinner />
        ) : (
          <>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-4"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              onClick={onCancel}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmationModal;
