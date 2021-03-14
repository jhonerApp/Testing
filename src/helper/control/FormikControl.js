import React from "react";
import FieldInput from "../Field/FieldInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FieldInput {...rest} />
    default:
      return null;
  }
}

export default FormikControl;
