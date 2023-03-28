import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formContainer: {
    marginTop: theme.spacing(4),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Formulario = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>MI FORMULARIO</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="nombre"
            label="Nombre"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="email"
            label="Correo electrónico"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Formulario;
