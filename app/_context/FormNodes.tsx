"use client";

import React, { createContext, useContext, useState } from "react";

interface FormNodesContextType {
  nodes: any[]; // Replace `any` with a specific type if known
  setNodes: React.Dispatch<React.SetStateAction<any[]>>; // Replace `any` with a specific type if known
}

const FormNodesContext = createContext<FormNodesContextType>({
  nodes: [],
  setNodes: () => {}, // Placeholder for the setter function
});

export const FormNodesProvider = ({ children }) => {
  const [nodes, setNodes] = useState<any[]>([]);

  return (
    <FormNodesContext.Provider value={{ nodes, setNodes }}>
      {children}
    </FormNodesContext.Provider>
  );
};

export const useFormNodes = () => useContext(FormNodesContext);