import React from "react";

const Child1 = ({ onButtonClick }) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold">Child 1</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onButtonClick} 
      >
        Show list
      </button>
    </div>
  );
};

export default Child1;