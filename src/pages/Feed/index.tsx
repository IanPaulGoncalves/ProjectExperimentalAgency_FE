import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPost, getPostDetail } from '../../reducers/post/actions';
import Modal from '../../components/Modal/Modal';
import SearchTicket from '../Ticket/SearchTicket';
import ResultTickets from '../Ticket/ResultTickets';

const useStyles = makeStyles({
  root: {
    width: '75%',
    marginLeft: 10,
    '@media(max-width: 700px)': {
      width: '100%',
      marginLeft: 0,
      marginBottom: 10
    }
  }
});

function Feed() {
  const classes = useStyles();
  const postState = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();
  const account = useAppSelector(state => state.account);
  const authenticated = Boolean(account.user);
  const [showState, setState] = useState({
    question: '',
    description: '',
    test: []
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getPosts = useCallback(async () => {
    await dispatch(getPost());
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, []);

  function setValueState(name: string, value: any) {
    setState(state => ({
      ...state,
      [name]: value
    }));
  }

  // async function handleClickOpen(id: number, question: string, description: string) {
  //   try {
  //     await dispatch(getPostDetail(id));
  //     setValueState('question', question);
  //     setValueState('description', description);
  //     setOpen(true);
  //   } catch (error) {
  //     setOpen(false);
  //   }
  // }

  const renderFeed = () => (
    <div className={classes.root}>
      <div>
        <SearchTicket />
        <ResultTickets />
      </div>
    </div>
  );

  return (
    <>
      {renderFeed()}
      {/* {renderFeed() && (
        <Modal
          id="id-modal-feed"
          container={containerModal()}
          title="Pergunta"
          onClick={handleClose}
          open={open}
          onClose={handleClose}
        />
      )} */}
    </>
  );
}

export default Feed;