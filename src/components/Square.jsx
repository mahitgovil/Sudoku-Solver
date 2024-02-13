import React from "react";
import { FormControl } from "react-bootstrap";

export default function Square({ id, value, disabled, style, onChange }) {
  return (
    <FormControl
      className="square"
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e, id)}
      disabled={disabled}
      maxLength="1"
      style={style}
    />
  );
}
