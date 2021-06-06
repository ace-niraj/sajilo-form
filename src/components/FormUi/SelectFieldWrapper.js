import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useField, useFormikContext } from 'formik';

const SelectFieldWrapper = ({
  name,
  options,
  disabled,
  searchDistrict,
  setsearchDistrict,

  ...otherprops
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = e => {
    const { value } = e.target;
    setFieldValue(name, value);

    if (searchDistrict === '') {
      return setsearchDistrict(value);
    }
  };
  const configSelect = {
    ...field,
    ...otherprops,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
    disabled,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <>
      <TextField {...configSelect}>
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={options[item]}>
              {options[item]}
            </MenuItem>
          );
        })}
      </TextField>
    </>
  );
};

export default SelectFieldWrapper;
