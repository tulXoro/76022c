'use client'

import React, { useEffect } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import FormNode from "./_components/FormNode";

import { ApiRoute } from './_lib/ApiRoute';

const nodeTypes = {
  form: FormNode,
}


export default function Home() {
  const [nodes, setNodes] = React.useState([]);
  const [edges, setEdges] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Note: port is arbitrarily set to 4000 because the frontend is already using 3000
      const response = await fetch(ApiRoute, { method: 'GET' });
      try {
        const data = await response.json();
        // console.log(data)

        const formNodes = data.nodes.map((node) => {
          const correspondingForm = data.forms.find((form) => form.id === node.data.component_id);
          
            return {
              ...node,
              data: {
                ...node.data,
                form: correspondingForm || null
              }
            } 
          
        })

        setNodes(formNodes);

        const fixedEdges = data.edges.map((edge: { source: string; target: string; }) => {
          return {
            id: `${edge.source}-${edge.target}`,
            source: edge.source,
            target: edge.target,
          }
        });

        setEdges(fixedEdges);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="h-screen">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
