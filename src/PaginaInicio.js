import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import Footer from './Footer'
import Header from './Header';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formContainer: {
    marginTop: theme.spacing(4),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#FFC700',
  },
  main: {
    marginBottom: theme.spacing(8),
  }
}));

const PaginaInicio = () => {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.main} >
        <Header />
        <Container maxWidth="md">
          <Grid container spacing={3} className={classes.formContainer} >
            <Grid item xs={12}>
              <h1>¡Déjanos tus datos y participa!</h1>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="nombre"
                label="Nombre Completo"
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
            <Grid item xs={12} md={6}>
              <TextField
                id="cedula"
                label="Cédula"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="location"
                label="Lugar de domicilio"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.submitButton}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PaginaInicio;
