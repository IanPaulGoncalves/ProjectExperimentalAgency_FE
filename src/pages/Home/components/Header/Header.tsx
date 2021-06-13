import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { useAppSelector } from '../../../../app/hooks';
import { resetLogin } from '../../../../services/authService';
import Modal from '../../../../components/Modal/Modal';
import MultValues from '../../../../components/MultValues/MultValues';

interface Props {
  // eslint-disable-next-line react/require-default-props
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined, threshold: 50 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'

  },
  containerMain: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  containerBar: {
    background: 'url(/assets/navbar/busticket_logo.png) no-repeat 0px 5px',
    display: 'flex',
    alignItems: 'center',
    width: 200
  },
  containerAction: {
    display: 'flex',
    width: 200,
    justifyContent: 'flex-end',
    '@media(max-width: 820px)': {
    }
  },
  input: {
    marginLeft: 10,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  button: {
    margin: 8
  }
});

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorAccount, setAnchorAccount] = React.useState<null | HTMLElement>(null);
  const openAccount = Boolean(anchorAccount);

  const account = useAppSelector(state => state.account);
  const authenticated = Boolean(account.user);

  function login() {
    return !authenticated && navigate('/login');
  }

  function logout() {
    resetLogin();
    handleCloseAccount();
  }

  const handleMenuAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAccount(event.currentTarget);
  };

  const handleCloseAccount = () => {
    setAnchorAccount(null);
  };


  const renderHeader: any = (props: Props) => (
    <HideOnScroll {...props}>
      <AppBar color="inherit" style={{ background: '#2c387e' }}>
        <Toolbar className={classes.root}>
          <div className={classes.containerMain}>
            <div className={classes.containerBar} />
            {authenticated ? (
              <div className={classes.containerAction}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-account"
                  aria-haspopup="true"
                  onClick={handleMenuAccount}
                  color="inherit"
                >
                  <AccountCircle style={{ color: '#fff' }} />
                </IconButton>
                <Menu
                  key={2}
                  id="menu-account"
                  anchorEl={anchorAccount}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={openAccount}
                  onClose={handleCloseAccount}
                >
                  <MenuItem onClick={handleCloseAccount}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseAccount}>My account</MenuItem>
                  <MenuItem onClick={logout}>Sair</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className={classes.containerAction}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<AccountCircle style={{ color: 'rgb(44, 56, 126)' }} />}
                  onClick={login}
                  style={{ background: '#fff' }}
                >
                  <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>Entrar</span>
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );

  return (
    <>
      {renderHeader()}
    </>
  );
}

export default Header;