import React from 'react';
import NavegationBar from '../components/Navegation/NavegationBar';
import Routes from '../routes/Routes';
import '../styles/style.css';

const isAuthenticated = true;

function App() {
  return (
    <>
      <NavegationBar auth={isAuthenticated} />
      <Routes />
    </>
  );
}

export default App;
