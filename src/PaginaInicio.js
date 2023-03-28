import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Gotham Ultra, sans-serif",
  },
  formContainer: {
    marginTop: theme.spacing(4),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "#FFC700",
    fontFamily: "Gotham Book, sans-serif",
  },
  main: {
    marginBottom: theme.spacing(8),
  },
}));

const PaginaInicio = () => {
  const classes = useStyles();
  const [cedula, setCedula] = useState("");
  const [tipoIdentificacion, setTipoIdentificacion] = useState('nacional');

  const comprobarCedula = (event) => {
    const tipoIdentificacion = event.target.tipoIdentificacion.value;
    fetch(`https://api.hacienda.go.cr/fe/ae?identificacion=${cedula}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.existe === "S") {
          // Aquí agregar la lógica para guardar el campo en la tabla
          console.log("Cédula válida");
        } else {
          console.log(data);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <main className={classes.main}>
        <Header />
        <Container maxWidth="md" className={classes.root}>
          <Grid container spacing={3} className={classes.formContainer}>
            <Grid item xs={12}>
              <h1>¡Déjanos tus datos y participá!</h1>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <h4>Tipo de identificación:</h4>
                <label>
                  <input
                    type="radio"
                    name="tipoIdentificacion"
                    value="nacional"
                    checked={tipoIdentificacion === 'nacional'}
                    onChange={(e) => setTipoIdentificacion(e.target.value)}
                  />
                  Nacional
                </label>
                <label>
                  <input
                    type="radio"
                    name="tipoIdentificacion"
                    value="extranjero"
                    checked={tipoIdentificacion === 'extranjero'}
                    onChange={(e) => setTipoIdentificacion(e.target.value)}
                  />
                  Extranjero
                </label>
              </div>
            </Grid>

            {tipoIdentificacion === 'nacional' ?
              <Grid item xs={12} md={6}>
                <TextField id="cedula" label="Cédula" fullWidth value={cedula} onChange={(event) => setCedula(event.target.value)} />
              </Grid>
            :
              <>
                <Grid item xs={12} md={6}>
                  <TextField id="nombre" label="Nombre Completo" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="email" label="Correo electrónico" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="cedula" label="Cédula" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="location" label="Lugar de domicilio" fullWidth />
                </Grid>
              </>
            }
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" className={classes.submitButton} onClick={comprobarCedula}>
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
