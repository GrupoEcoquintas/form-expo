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
    marginTop: theme.spacing(3),
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
  const [tipoIdentificacion, setTipoIdentificacion] = useState("nacional");
  const [nombre, setNombre] = useState("");
  const [userData, setUserData] = useState("");
  const [cedulaExtranjero, setCedulaExtranjero] = useState("");
  const [nombreExtranjero, setNombreExtranjero] = useState("");
  const [userDataExtranjero, setUserDataExtranjero] = useState("");

  const comprobarCedula = () => {
    fetch(`https://api.hacienda.go.cr/fe/ae?identificacion=${cedula}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.existe === "S") {
          // Aquí agregar la lógica para guardar el campo en la tabla
          console.log("Cédula válida");
        } else {
          setUserData(data);
          setNombre(data.nombre);
          console.log(userData);
          console.log("Nombre Completo", data.nombre);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleTipoIdentificacionChange = (event) => {
    setTipoIdentificacion(event.target.value);
    if (event.target.value === "extranjero") {
      setCedula("");
    }
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
                    checked={tipoIdentificacion === "nacional"}
                    onChange={handleTipoIdentificacionChange}
                  />
                  Nacional
                </label>
                <label>
                  <input
                    type="radio"
                    name="tipoIdentificacion"
                    value="extranjero"
                    checked={tipoIdentificacion === "extranjero"}
                    onChange={handleTipoIdentificacionChange}
                  />
                  Extranjero
                </label>
              </div>
            </Grid>
            {tipoIdentificacion === "nacional" ? (
              <>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="cedula"
                    label="Cédula"
                    fullWidth
                    onChange={(event) => {
                      setCedula(event.target.value);
                      setUserData(null);
                    }}
                    onBlur={(event) => {
                      if (event.target.value !== "") {
                        comprobarCedula();
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="nombre"
                    label="Nombre Completo"
                    fullWidth
                    value={userData?.nombre || nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField id="email" label="Correo electrónico" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="location"
                    label="Lugar de domicilio"
                    fullWidth
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <TextField id="cedula" label="Identificacion" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="nombre"
                    label="Nombre Completo"
                    fullWidth
                    value={userData?.nombre || nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="email" label="Correo electrónico" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="location"
                    label="Lugar de domicilio"
                    fullWidth
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.submitButton}
                style={{ marginBottom: "80px" }}
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
