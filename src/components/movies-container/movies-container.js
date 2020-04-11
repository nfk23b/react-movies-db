import React, { Component } from "react";
import MoviesList from "../movies-list";
import MovieInfo from "../movie-info";
import { compose } from "../../utils";
import { Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
    grid: {
        backgroundColor: theme.palette.secondary.main,
    },
    box: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(5),
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
});

class MoviesContainer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Box className={classes.box}>
                <Switch>
                    <Route
                        path="/react-movies-db/"
                        component={MoviesList}
                        exact
                    />

                    <Route
                        path={`/react-movies-db/movie/:id`}
                        component={MovieInfo}
                    />
                </Switch>
            </Box>
        );
    }
}

export default compose(withStyles(styles))(MoviesContainer);
