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
                main: '#4c5c96'
            },
            secondary: {
                main: '#2e3141'
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 480,
                xmd: 768,
                md: 960,
                lg: 1280,
                xl: 1920,
            }
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
