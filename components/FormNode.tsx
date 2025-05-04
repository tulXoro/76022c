import React, { useEffect, useState } from "react";
import { Handle, Position } from "@xyflow/react";

export default function FormNode({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(data.form)

  const handleNodeClick = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <div
        className="w-30 border-1 border-gray-300 bg-white cursor-pointer p-2 rounded-xl"
        onClick={handleNodeClick} 
      >
        <label className="text-xs font-bold text-gray-400">Form</label>
        <div className="text-sm text-gray-700">{data.name}</div>

        {data.prerequisites && data.prerequisites.length > 0 && (
          <Handle type="target" position={Position.Left} />
        )}

        <Handle type="source" position={Position.Right} id={data.id} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-default">
          <div className="bg-white p-4 rounded shadow-2xl border-1">
            <h2>{form.name}</h2>
            <p>{form.description}</p>
            <p>Prerequisites: {data.prerequisites?.join(", ") || "None"}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
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
// Example of form
// "forms": [
//     {
//       "id": "f_01jk7ap2r3ewf9gx6a9r09gzjv",
//       "name": "test form",
//       "description": "test",
//       "is_reusable": false,
//       "field_schema": {
//         "type": "object",
//         "properties": {
//           "button": {
//             "avantos_type": "button",
//             "title": "Button",
//             "type": "object"
//           },
//           "dynamic_checkbox_group": {
//             "avantos_type": "checkbox-group",
//             "items": {
//               "enum": [
//                 "foo",
//                 "bar",
//                 "foobar"
//               ],
//               "type": "string"
//             },
//             "type": "array",
//             "uniqueItems": true
//           },
//           "dynamic_object": {
//             "avantos_type": "object-enum",
//             "enum": null,
//             "title": "Dynamic Object",
//             "type": "object"
//           },
//           "email": {
//             "avantos_type": "short-text",
//             "format": "email",
//             "title": "Email",
//             "type": "string"
//           },
//           "id": {
//             "avantos_type": "short-text",
//             "title": "ID",
//             "type": "string"
//           },
//           "multi_select": {
//             "avantos_type": "multi-select",
//             "items": {
//               "enum": [
//                 "foo",
//                 "bar",
//                 "foobar"
//               ],
//               "type": "string"
//             },
//             "type": "array",
//             "uniqueItems": true
//           },
//           "name": {
//             "avantos_type": "short-text",
//             "title": "Name",
//             "type": "string"
//           },
//           "notes": {
//             "avantos_type": "multi-line-text",
//             "title": "Notes",
//             "type": "string"
//           }
//         },
//         "required": [
//           "id",
//           "name",
//           "email"
//         ]
//       },
//       "ui_schema": {
//         "type": "VerticalLayout",
//         "elements": [
//           {
//             "type": "Control",
//             "scope": "#/properties/dynamic_checkbox_group",
//             "label": "Dynamic Checkbox Group"
//           },
//           {
//             "type": "Button",
//             "scope": "#/properties/button",
//             "label": "Button"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/dynamic_object",
//             "label": "Dynamic Object"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/id",
//             "label": "ID"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/name",
//             "label": "Name"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/email",
//             "label": "Email"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/notes",
//             "label": "Notes"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/multi_select",
//             "label": "Multi Select",
//             "options": {
//               "format": "multi-select"
//             }
//           }
//         ]
//       },
//       "dynamic_field_config": {
//         "button": {
//           "selector_field": "title",
//           "payload_fields": {
//             "userId": {
//               "type": "form_field",
//               "value": "id"
//             }
//           },
//           "endpoint_id": "te_01jk7ap2r0ewfbrfd53sx46hd2"
//         },
//         "dynamic_checkbox_group": {
//           "selector_field": "title",
//           "payload_fields": {
//             "userId": {
//               "type": "form_field",
//               "value": "id"
//             }
//           },
//           "endpoint_id": "te_01jk7ap2r0ewfbrfd53sx46hd2"
//         },
//         "dynamic_object": {
//           "selector_field": "title",
//           "payload_fields": {
//             "userId": {
//               "type": "form_field",
//               "value": "id"
//             }
//           },
//           "endpoint_id": "te_01jk7ap2r0ewfbrfd53sx46hd2"
//         }
//       }
//     },
