import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#226035",
        color: "white",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
    },
    logo: {
        maxWidth: '100%',
        height: '100px',
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
      <Container maxWidth="lg">
        <img src="https://grupoecoquintas.com/wp-content/uploads/2020/08/Recurso-2@4x2-1024x772.png" alt="Logo" className={classes.logo} />
      </Container>
    </div>
    );
};

export default Footer;
