import React from 'react';

import { Box, Typography, IconButton, makeStyles, } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white
    },
}));

const Footer = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.root} color="secondary">
            <Typography >
                Footer
            </Typography>
        </Box>
    )
}

export default Footer;
