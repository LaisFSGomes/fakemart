import InputLabel from "@mui/material/InputLabel";
import React from "react";
import { InputProps } from "_utils/interfaces";
import { Form, HelpText, InputForm } from "./Input.styles";

export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  onChange,
  value,
  helpText,
  colorHelp,
}) => {
  return (
    <Form>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputForm
        required
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disableUnderline={true}
      />
      <HelpText className={colorHelp}> {helpText} </HelpText>
    </Form>
  );
};
