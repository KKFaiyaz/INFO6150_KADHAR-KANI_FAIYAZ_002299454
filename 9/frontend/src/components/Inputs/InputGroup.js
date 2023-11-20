import React from 'react';
import { Form } from 'react-bootstrap';

const InputGroup = ({ label, type, placeholder, value, onChange, controlId }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default InputGroup;
