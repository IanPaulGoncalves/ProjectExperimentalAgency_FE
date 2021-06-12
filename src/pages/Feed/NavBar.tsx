import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    padding: 16,
    width: '25%',
    maxHeight: 350,
    '@media(max-width: 700px)': {
      width: '100%',
      marginBottom: 10
    }
  }
});

const tags = [
  { id: 1, name: 'Minas Gerais', link: 'mg' },
  { id: 2, name: 'São Paulo', link: 'sp' },
  { id: 3, name: 'Goiás', link: 'go' },
  { id: 4, name: 'Bahia', link: 'ba' },
  { id: 5, name: 'Distrito Federal', link: 'df' }
];

function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleClickItem(link: any) {
    if (link) {
      navigate(`/search/${link}`);
    }
  }

  function handleClickItemFeed(link: any) {
    if (link) {
      navigate(`${link}`);
    }
  }

  return (
    <Paper className={classes.root}>
      <ListSubheader>Menu</ListSubheader>
      <ListItem dense button key={1}>
        <ListItemText key={1} primary="Home" onClick={event => handleClickItemFeed('/')} />
      </ListItem>
      <ListSubheader>Top 5</ListSubheader>
      {
        tags.map(item => (
          <ListItem dense button key={item.id}>
            <ListItemText key={item.id} primary={`${item.name}`} onClick={event => handleClickItem(item.link)} />
          </ListItem>
        ))
      }
    </Paper>
  );
}

export default NavBar;