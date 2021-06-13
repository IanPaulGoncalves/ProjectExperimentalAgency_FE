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
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownDate from '../../components/DropdownDate/DropdownDate';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getSearchTicketsAction } from '../../reducers/ticket/actions';

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
    startCity: '',
    endCity: '',
    startDate: null
  });
  const navigate = useNavigate();

  const account = useAppSelector(state => state.ticket);

  const dispatch = useAppDispatch();

  function setValueState(name: string, values: any) {
    setState(state => ({
      ...state,
      [name]: values
    }));
  }

  const handleDateChange = (date: Date | null, label: string) => {
    if (label === 'startDate') setValueState('startDate', date);
    if (label === 'endDate') setValueState('endDate', date);
  };

  async function handleClickSearch() {
    try {
      debugger;
      // dispatch(resetTicketsAction());
      await dispatch(getSearchTicketsAction(showState.startCity, showState.endCity));
    } catch (error) {
      // setState({ ...showState, errorMessage: error.response.data.message });
    }
  }

  function handleChangeStartCity(startCity: string) {
    if (startCity) {
      setValueState('startCity', startCity);
    }
  }

  function handleChangeEndCity(endCity: any) {
    if (endCity) {
      setValueState('endCity', endCity);
    }
  }


  const cities = [
    { city: 'São Paulo', cityId: 1 },
    { city: 'Vinhedo', cityId: 2 },
    { city: 'Valinhos', cityId: 3 },
    { city: 'Jundiaí', cityId: 4 },
    { city: 'Campinas', cityId: 5 },
    { city: 'Belo Horizonte', cityId: 6 }
  ];

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
                <Dropdown label="Cidade de origem" options={cities} onChange={handleChangeStartCity} />
                <Dropdown label="Cidade de destino" options={cities} onChange={handleChangeEndCity} />
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
                  onClick={handleClickSearch}
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