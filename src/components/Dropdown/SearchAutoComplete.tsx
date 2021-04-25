import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';

export default function SearchAutoComplete() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        size="small"
        id="free-solo-2-demo"
        disableClearable
        options={cities.map(option => option.city)}
        renderInput={params => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

const cities = [
  { city: 'São Paulo', cityId: 1 },
  { city: 'Vinhedo', cityId: 2 },
  { city: 'Valinhos', cityId: 3 },
  { city: 'Jundiaí', cityId: 4 },
  { city: 'Campinas', cityId: 5 },
  { city: 'Belo Horizonte', cityId: 6 }
];