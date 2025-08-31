import React from "react";

function ConfirmPopup({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-1 bg-gray-200 rounded-2xl text-gray-700 hover:bg-gray-300"
          >
            ยกเลิก
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1 bg-red-500 rounded-2xl text-white hover:bg-red-600"
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
