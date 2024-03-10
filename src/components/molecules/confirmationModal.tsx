// components/molecules/ConfirmationModal.tsx
import React from "react";

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
      <p className="text-xl">{message}</p>
      <div className="mt-4 flex justify-center">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-4"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
