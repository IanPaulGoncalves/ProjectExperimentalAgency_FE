import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import NavegationBar from '../components/Navegation/NavegationBar';
import Routes from '../routes/Routes';
import '../styles/style.css';

const isAuthenticated = true;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    height: '100vh',
    width: '1366px',
    margin: '0 auto',
    marginTop: '20px'
  },
  toolbar: {
    minHeight: 64
  },
  backSearch: {
    position: 'absolute',
    height: '400px',
    width: '100%',
    background: 'black'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavegationBar auth={isAuthenticated} />
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <div className="container">
          <Box>
            <Routes />
          </Box>
        </div>
      </main>
    </div>
  );
}

export default App;
