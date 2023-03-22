import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#006544",
        color: "white",
        //paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2),
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
    },
    logo: {
        maxWidth: '100%',
        height: '100px',
        marginTop: '4px'
    },
    divider: {
        backgroundColor: '#FFC700',
        zIndex: 1,
        height: '8px'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Divider className={classes.divider} />
            <Container maxWidth="lg">
                <img src="https://grupoecoquintas.com/wp-content/uploads/2020/08/Recurso-2@4x2-1024x772.png" alt="Logo" className={classes.logo} />
            </Container>
        </div>
    );
};

export default Footer;
