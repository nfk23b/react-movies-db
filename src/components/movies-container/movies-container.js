import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import MoviesList from "../movies-list";
import MovieInfo from "../movie-info";
// import { fetchMovieInfo } from "../../actions";
import { connect } from "react-redux";
import { withMoviesDbService } from "../hoc";
import { compose } from "../../utils";
import { Route, Switch } from 'react-router-dom'
// import { bindActionCreators } from "redux";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
    grid: {
        backgroundColor: theme.palette.secondary.main
    },
    box: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(5)
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
});

class MoviesContainer extends Component {
    
    getMoviePath = (movie) => {
        const { path } = this.props;
        console.log(path)
        console.log(movie)

        // if (!Object.keys(movie.length)) {
        //     return path;
        // } else {
        //     return  movie;
        // } 
    }

    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        const {
            path,
            movie,
            classes
        } = this.props;

        // if (loading) {
        //     return <Spinner />;
        // }

        // if (error) {
        //     return <ErrorIndicator />;
        // }

        return (
            <Box className={classes.box}>
                <Switch>
                    <Route 
                        path="/"
                        // render={(props) => <MoviesList {...props} movies={movies} />}
                        component={MoviesList}
                        exact/>
                        
                    <Route 
                        path={`/movie/:id`}
                        // path={`/${movie.imdbID}`}
                        // render={(props) => <MovieInfo {...props} movie={movie}/>}
                        component={MovieInfo}/>
                </Switch>
            </Box>
        );
    }
}

const mapStateToProps = ({
    movieInfo: { path, movie = {}}
}) => {
    return { path, movie };
};

export default compose(
    withStyles(styles),
    withMoviesDbService(),
    connect(mapStateToProps)
)(MoviesContainer);
