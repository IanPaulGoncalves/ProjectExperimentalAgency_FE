import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export interface Props {
  options: any,
  id: string;
  label: string;
  onChange: any;
  value: any;
}

export default function MultValues(props: Props) {
  function getOptions(options: any) {
    if (options) {
      return options.value;
    }
    return '';
  }
  return (
    <Autocomplete
      multiple
      id={props.id}
      options={props.options}
      getOptionLabel={options => getOptions(options)}
      onChange={(event, newValue) => props.onChange(newValue)}
      value={props.value}
      filterSelectedOptions
      renderInput={params => (
        <TextField
          {...params}
          variant="standard"
          label={props.label}
        />
      )}
    />
  );
}