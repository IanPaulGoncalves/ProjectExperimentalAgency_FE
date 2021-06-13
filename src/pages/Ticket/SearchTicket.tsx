import React, { useState } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownDate from '../../components/DropdownDate/DropdownDate';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%'
  },
  formControl: {
    margin: 4,
    minWidth: 120
  }
});

// interface Props {
//   image: string;
//   name: string;
//   time: string;
//   question: string;
//   description: string;
//   comment: number;
//   like: number;
//   tag: Array<object>;
//   onClick?: any;
//   type?: string;
// }

function SearchTicket() {
  const classes = useStyles();
  const [showState, setState] = useState({
    startDate: null,
    endDate: null
  });
  const [value, setValue] = useState('female');

  function setValueState(name: string, values: any) {
    setState(state => ({
      ...state,
      [name]: values
    }));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleDateChange = (date: Date | null, label: string) => {
    if (label === 'startDate') setValueState('startDate', date);
    if (label === 'endDate') setValueState('endDate', date);
  };

  return (
    <Box className={classes.container}>
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
      >
        <Card>
          <CardContent>
            <Box style={{ width: 300 }}>
              <Box>
                <Dropdown label="Cidade de origem" />
                <Dropdown label="Cidade de destino" />
              </Box>
              <Box display="flex">
                <Box width="50%" marginRight="10px">
                  <DropdownDate
                    label="Data de ida"
                    onChange={date => handleDateChange(date, 'startDate')}
                    value={showState.startDate}
                  />
                </Box>
                <Box width="50%">
                  <DropdownDate
                    label="Data de volta"
                    onChange={date => handleDateChange(date, 'endDate')}
                    value={showState.endDate}
                  />
                </Box>
              </Box>
              <Box>
                <FormControl component="fieldset">
                  <RadioGroup
                    style={{ flexDirection: 'row' }}
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="ida" control={<Radio />} label="Somente ida" />
                    <FormControlLabel value="volta" control={<Radio />} label="Somente volta" />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box marginTop="5px">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Pesquisar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default SearchTicket;