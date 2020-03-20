import React from 'react';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';
import { Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'normalize.css/normalize.css';
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
                <Body />
                <Footer />
            </Container>
        </ThemeProvider>
    )
};

export default App;
