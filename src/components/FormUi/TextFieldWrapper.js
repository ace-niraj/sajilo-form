import { TextField } from '@material-ui/core';
import React from 'react';
import { ErrorMessage, useField } from 'formik';
const TextFieldWrapper = ({ name, ...otherprops }) => {
  const [field, meta] = useField(name);
  const configTextfield = {
    ...field,
    ...otherprops,
    fullWidth: true,
    variant: 'outlined',
    autoComplete: 'off',
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField {...configTextfield} />;
};

export default TextFieldWrapper;
