import React, { useEffect, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import FormItem from "./FormItem";

export default function FormNode({ data }) {

  
  const [prefill, setPrefill] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(data.form);

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
        <h1 className="text-xs font-bold text-gray-400">Form</h1>
        <div className="text-sm text-gray-700">{data.name}</div>

        {data.prerequisites && data.prerequisites.length > 0 && (
          <Handle type="target" position={Position.Left} />
        )}

        <Handle type="source" position={Position.Right} id={data.id} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 cursor-default z-auto">
          <div className="bg-white p-4 rounded shadow-2xl border-1">
            <h2>{form.name}</h2>
            <p>{form.description}</p>
            <hr className="my-3" />
            <Label htmlFor="prefill-switch">Prefill</Label>
            <div className="flex flex-row items-center space-x-4 mb-3">
              <p className="text-xs w-44 text-gray-400">
                Prefill fields for this form
              </p>
              <Switch
                id="prefill-switch"
                checked={prefill}
                onCheckedChange={setPrefill}
              ></Switch>
            </div>

            <div className="flex flex-col gap-2">
              {
                form.ui_schema.elements.map((UIData, _) => {
                  const key = UIData.scope.split("/").pop();
                  const schema = form.field_schema.properties[key];

                  return <FormItem key={_} data={UIData} schema={schema} form={data.name} />
                }
                  
                )
              }
              
            </div>

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
// Example of form.
// Marker key ================================================
// x implemented
// ? no idea / pending
// - means it is in progress
// > should be implemented in the future
// ===========================================================
// "forms": [
//     {
//       "id": "f_01jk7ap2r3ewf9gx6a9r09gzjv", x
//       "name": "test form", x
//       "description": "test", x
//       "is_reusable": false, >
//       "field_schema": { -
//         "type": "object", ?
//         "properties": { -
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
//       "ui_schema": { x
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
