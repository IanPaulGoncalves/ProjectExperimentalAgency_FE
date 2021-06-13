import React, { useState } from 'react';
import {
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  formControl: {
    margin: 4,
    minWidth: 120
  }
});

function ResultTickets() {
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
      <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
        Passagens:
      </Typography>

    </Box>
  );
}

export default ResultTickets;