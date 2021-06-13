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
  Box,
  Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
        width: '100%',
        marginBottom: 10
      }}
      >
        <Card>
          <CardContent>
            <Box style={{ width: 300 }}>
              <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
                Pesquise por sua passagem:
              </Typography>
              <Box display="flex" flexGrow="1" justifyContent="center">
                <SearchIcon style={{ width: 50, height: 50 }} color="primary" />
              </Box>
              <Box>
                <Dropdown label="Cidade de origem" />
                <Dropdown label="Cidade de destino" />
              </Box>
              <Box display="flex">
                <Box flexGrow="1" marginBottom="10px">
                  <DropdownDate
                    label="Data"
                    onChange={date => handleDateChange(date, 'startDate')}
                    value={showState.startDate}
                  />
                </Box>
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