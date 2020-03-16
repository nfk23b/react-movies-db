import React from 'react';
import Header from '../header';
import { Container, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './app.scss';

const App = () => {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#2e3141'
            },
            secondary: {
                main: '#45558D'
            },

        }
    });


    return (
        <ThemeProvider theme={theme}>
            <Container >
                <Header />
            </Container>
        </ThemeProvider>
    )
};

export default App;
