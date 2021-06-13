import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';

interface Props {
  // eslint-disable-next-line react/require-default-props
  label?: string;
  options: any;
  onChange: any;
}


export default function Dropdown(props: Props) {
  function getOptions(options: any) {
    if (options) {
      return options.map(option => option.city);
    }
    return '';
  }
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        size="small"
        id="free-solo-2-demo"
        disableClearable
        options={getOptions(props.options)}
        onChange={(event, newValue) => props.onChange(newValue)}
        renderInput={params => (
          <TextField
            {...params}
            label={props.label || ''}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}