// components/atoms/alert.tsx
import React from "react";

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded">
      <span>{message}</span>
    </div>
  );
};

export default Alert;
