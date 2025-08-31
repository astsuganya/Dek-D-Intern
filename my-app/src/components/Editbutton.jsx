import { useState } from "react";
import GarbageIcon from "./icons/GarbageIcon";
import ConfirmPopup from "./ConfirmPopup";

function EditButton({ editMode, setEditMode, selectedCount, setSelected, books, setBooks, selected }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2">
      { !editMode && (
        <button
        className="text-xs sm:text-sm text-gray-600 px-3 py-1.5 border border-gray-300 rounded-2xl"
        onClick={() => setEditMode(true)}
      >
        แก้ไข
      </button>
      )}

      {editMode && (
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button className="text-xs sm:text-sm text-gray-600 px-3 py-1.5 border border-gray-300 rounded-2xl sm:w-auto"
           onClick={() => {
              setEditMode(false)
              if (typeof setSelected === "function") setSelected([]);
            }}>
            ยกเลิก
          </button>

          <button className={`text-xs sm:text-sm text-gray-600 px-3 py-1.5 border border-gray-300 rounded-2xl flex
           ${selectedCount === 0 
            ? "border-gray-300 text-gray-300 cursor-not-allowed" 
            : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
          onClick={() => setShowConfirm(true)}
          disabled={selectedCount === 0}>

            <GarbageIcon color={selectedCount === 0 ? "#c0c0c0" : "#808080"} />
            <span className="ml-1.5">{selectedCount} รายการ</span>
          </button>
        </div>
      )}

      {showConfirm && (
        <ConfirmPopup
          message={`คุณต้องการลบ ${selectedCount} รายการ?`}
          onConfirm={() => {
            if (!books || !Array.isArray(books) || !selected) return;
            setBooks(prev => prev.filter(book => selected.includes(book.id) === false));
            setSelected([]);
            setShowConfirm(false);
          }}

          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}

export default EditButton;
