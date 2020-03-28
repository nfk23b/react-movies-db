import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import MoviesContainer from "../movies-container";

const useStyles = makeStyles(theme => ({
    box: {
        backgroundColor: theme.palette.primary.main,
        flexGrow: 1
    },
    heading: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: theme.palette.common.white
    }
}));

const Body = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography variant="h4" className={classes.heading}>
                Welcome to React Movies DB
            </Typography>
            <Typography variant="subtitle2" className={classes.heading}>
                Use search input on top to find any movies you want
            </Typography>

            <MoviesContainer />
        </Box>
    );
};

export default Body;
