import React, { useEffect, useState } from "react";
import { Handle, Position } from "@xyflow/react";

export default function FormNode({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNodeClick = () => {
    setIsModalOpen(true); 
    console.log(data.form)
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <div
        className="w-30 b- bg-white cursor-pointer"
        onClick={handleNodeClick} 
      >
        <label className="text-xs font-bold text-gray-200">Form</label>
        <div className="text-sm text-gray-700">{data.name}</div>

        {data.prerequisites && data.prerequisites.length > 0 && (
          <Handle type="target" position={Position.Left} />
        )}

        <Handle type="source" position={Position.Right} id={data.id} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold">Node Details</h2>
            <p>Name: {data.name}</p>
            <p>ID: {data.id}</p>
            <p>Prerequisites: {data.prerequisites?.join(", ") || "None"}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
