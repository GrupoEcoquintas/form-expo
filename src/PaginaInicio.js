import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";
const request = require('request');

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
  const [tipoIdentificacion, setTipoIdentificacion] = useState("nacional");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [emailNacional, setEmailNacional] = useState("");
  const [locationNacional, setlocationNacional] = useState("");
  const [userData, setUserData] = useState("");
  const [cedulaExtranjero, setCedulaExtranjero] = useState("");
  const [nombreExtranjero, setNombreExtranjero] = useState("");
  const [userDataExtranjero, setUserDataExtranjero] = useState(null);
  const [emailExtranjero, setEmailExtranjero] = useState("");
  const [locationExtranjero, setLocationExtranjero] = useState("");

  const comprobarCedula = () => {
    fetch(`https://api.hacienda.go.cr/fe/ae?identificacion=${cedula}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // Aquí agregar la lógica para guardar el campo en la tabla
          setUserData(data);
          console.log("Cédula válida");
        } else {
          console.log("else");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleTipoIdentificacionChange = (event) => {
    setTipoIdentificacion(event.target.value);
    if (event.target.value === "extranjero") {
      setCedula("");
      setNombre("");
      setEmailNacional("");
      setlocationNacional("");
    }
    setCedulaExtranjero("");
    setNombreExtranjero("");
    setEmailExtranjero("");
    setLocationExtranjero("");
  };

  const enviarFormulario = () => {
    if (tipoIdentificacion === "nacional") {
      const clienteNacional = [
        1,
        cedula,
        userData.nombre,
        emailNacional,
        locationNacional,
        1,
        11,
      ];
      console.log(clienteNacional);
      // Hacer una solicitud POST con fetch
      const options = {
        uri: 'http://44.209.226.143:5000/expoform',
        method: 'POST',
        json: clienteNacional,
        headers: {
          'Content-Type': 'application/json',
          'token': '3e26b17c-3e96-40d6-91fa-7f355bf2c570'
        }
      };
      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log('Cliente nacional creado exitosamente!');
        } else {
          console.log('Error al crear el cliente nacional');
        }
      });
    }
    if (tipoIdentificacion === "extranjero") {
      const clienteExtranjero = [
        2,
        cedulaExtranjero,
        nombreExtranjero,
        emailExtranjero,
        locationExtranjero,
        1,
        11,
      ];
      console.log("Extranjero", clienteExtranjero);

      // Hacer una solicitud POST con fetch
      const options = {
        uri: 'http://44.209.226.143:5000/expoform',
        method: 'POST',
        json: clienteExtranjero,
        headers: {
          'Content-Type': 'application/json',
          'token': '3e26b17c-3e96-40d6-91fa-7f355bf2c570'
        }
      };
      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log('Cliente extranjero creado exitosamente!');
        } else {
          console.log('Error al crear el cliente extranjero');
        }
      });
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
                    value={userData?.cedula || cedula}
                    onChange={(event) => setCedula(event.target.value)}
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
                  <TextField
                    id="email"
                    label="Correo electrónico"
                    fullWidth
                    value={userData?.emailNacional || emailNacional}
                    onChange={(event) => setEmailNacional(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="location"
                    label="Lugar de domicilio"
                    fullWidth
                    value={userData?.locationNacional || locationNacional}
                    onChange={(event) =>
                      setlocationNacional(event.target.value)
                    }
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="id"
                    label="Identificacion"
                    fullWidth
                    value={
                      userDataExtranjero?.cedulaExtranjero || cedulaExtranjero
                    }
                    onChange={(event) =>
                      setCedulaExtranjero(event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="nombreExtranjero"
                    label="Nombre Completo"
                    fullWidth
                    value={
                      userDataExtranjero?.nombreExtranjero || nombreExtranjero
                    }
                    onChange={(event) =>
                      setNombreExtranjero(event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="emailExtranjero"
                    label="Correo electrónico"
                    fullWidth
                    value={
                      userDataExtranjero?.emailExtranjero || emailExtranjero
                    }
                    onChange={(event) => setEmailExtranjero(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="location"
                    label="Lugar de domicilio"
                    fullWidth
                    value={
                      userDataExtranjero?.locationExtranjero ||
                      locationExtranjero
                    }
                    onChange={(event) =>
                      setLocationExtranjero(event.target.value)
                    }
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
                onClick={enviarFormulario}
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
