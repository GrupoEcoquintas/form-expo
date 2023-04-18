import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Gotham Ultra, sans-serif'
  },
  appBar: {
    backgroundColor: '#1E9344',
  },
  button: {
    fontFamily: 'Gotham Ultra, sans-serif'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            GrupoEcoquintas
          </Typography>
          <Button color="inherit" 
          className={classes.button}
          onClick={()=> window.location.reload()}
          >Inicio
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
