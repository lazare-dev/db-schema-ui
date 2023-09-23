import React, { useState } from 'react';
import Field from './Field';

function Table({ table }) {
  const [fields, setFields] = useState([]);

  const createField = async () => {
    try {
      const response = await API.createField('NewField', table.id); // Replace 'NewField' with the desired field name
      setFields([...fields, response]);
    } catch (error) {
      console.error('Error creating field:', error);
    }
  };

  return (
    <div>
      <h3>Table: {table.name}</h3>
      <button onClick={createField}>Create Field</button>

      {fields.map((field) => (
        <Field key={field.id} field={field} />
      ))}
    </div>
  );
}

export default Table;
