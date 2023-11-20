import React from 'react';
import { Button } from 'react-bootstrap';

const InputButton = ({ onClick }) => {
  return (
    <Button variant="primary" type="button" onClick={onClick}>Login
    </Button>
  );
};

export default InputButton;
