import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTicketsAction } from '../../reducers/ticket/actions';
import TicketComponent from '../../components/Ticket/TicketComponent';
import { getTicketById } from '../../services/ticketService';
import Modal from '../../components/Modal/Modal';
import getChair from '../../utils/utils';

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
  const navigate = useNavigate();
  const [showState, setState] = useState({
    startCity: '',
    endCity: '',
    seats: 0,
    time: '',
    price: '',
    chair: { value: '', error: false },
    errorMessage: ''
  });
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const ticket = useAppSelector(state => state.ticket);
  const account = useAppSelector(state => state.account);

  const authenticated = Boolean(account.user);

  const dispatch = useAppDispatch();

  const initTicket = useCallback(async () => {
    try {
      await dispatch(getTicketsAction());
    } catch (error) {
      setState({ ...showState, errorMessage: error.response.data.message });
      setOpen(true);
    }
  }, [dispatch]);

  useEffect(() => {
    initTicket();
  }, [initTicket]);

  function setValueState(name: string, values: any) {
    setState(state => ({
      ...state,
      [name]: values
    }));
  }

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { vertical, horizontal }: any = { vertical: 'top', horizontal: 'center' };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setValueState('startCity', '');
    setValueState('endCity', '');
    setValueState('seats', '');
    setValueState('time', '');
    setValueState('price', '');
    setValueState('chair', { ...showState.chair, value: '', error: false });
  };

  const handleClickModal = () => {
    if (validate()) {
      setOpenModal(false);
      navigate('/buy-ticket');
    }
  };

  function handleClickBuy(id: number) {
    if (authenticated) {
      const ticketById = getTicketById(id);
      if (ticketById) {
        setValueState('startCity', ticketById.startCity);
        setValueState('endCity', ticketById.endCity);
        setValueState('seats', ticketById.seats);
        setValueState('time', ticketById.time);
        setValueState('price', `R$${ticketById.price}`);
        setOpenModal(true);
      }
    } else {
      navigate('/login');
    }
  }

  const handleChangeChair = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValueState('chair', { ...showState.chair, value: event.target.value as string, error: false });
  };

  function containerModal() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            disabled
            id="id-start-city-modal-header"
            label="Cidade de ida"
            multiline
            rows={1}
            value={showState.startCity}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            disabled
            id="id-end-city-modal-header"
            label="Cidade de volta"
            multiline
            rows={1}
            value={showState.endCity}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            disabled
            id="id-seats-modal-header"
            label="Cadeiras disponíveis"
            multiline
            rows={1}
            value={showState.seats}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            disabled
            id="id-time-modal-header"
            label="Horário de saída"
            multiline
            rows={1}
            value={showState.time}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            disabled
            id="id-price-modal-header"
            label="Preço"
            multiline
            rows={1}
            value={showState.price}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FormControl fullWidth error={showState.chair.error}>
            <InputLabel id="demo-simple-select-label">Escolher cadeira</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={showState.chair.value}
              error={showState.chair.error}
              onChange={handleChangeChair}
            >
              {getChair(showState.seats).length > 0
                && getChair(showState.seats).map(item => (
                  <MenuItem value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  function validate() {
    let validation = true;
    if (_.isEmpty(showState.chair.value)) {
      setValueState('chair', { ...showState.chair, error: true });
      validation = false;
    }

    return validation;
  }

  function renderContent() {
    return (
      <Box className={classes.container}>
        <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
          Passagens:
        </Typography>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity="warning">
            {showState.errorMessage}
          </Alert>
        </Snackbar>
        {ticket.tickets !== undefined
          && ticket.tickets.length > 0
          && ticket.tickets.map(item => (
            <TicketComponent
              startCity={item.startCity}
              endCity={item.endCity}
              onAction={event => handleClickBuy(item.id)}
            />
          ))}
      </Box>
    );
  }

  return (
    <>
      {renderContent()}
      {openModal && (
        <Modal
          container={containerModal()}
          title="Comprar passagem"
          onClick={handleClickModal}
          open={openModal}
          onClose={handleCloseModal}
          labelAction="Comprar"
        />
      )}
    </>
  );
}

export default ResultTickets;