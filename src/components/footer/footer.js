import React from 'react';

import { Box, Typography, makeStyles, } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
}));

const Footer = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.root} color="secondary">
            <Typography >
                nfk23b@gmail.com
            </Typography>
        </Box>
    )
}

export default Footer;
