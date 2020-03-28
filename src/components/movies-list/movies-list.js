import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
// import { fetchMovies } from '../../actions';
import { fetchMovieInfo } from "../../actions";
import { connect } from "react-redux";
import { withMoviesDbService } from "../hoc";
import { compose } from "../../utils";
import { bindActionCreators } from "redux";
import {
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import InfoIcon from "@material-ui/icons/Info";

const styles = () => ({
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    }
});

class MoviesList extends Component {
    
    render() {

        const { movies, classes } = this.props;
        
        return (
            
            <GridList
                cellHeight={180}
                cols={5}
                spacing={10}
            >
                {movies.map(tile => (
                    <GridListTile
                        key={tile.id}
                    >
                        <img src={tile.image} alt={tile.title} />
                        <Link to={`/movie/${tile.id}`}>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>year: {tile.year}</span>}
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${tile.title}`}
                                        className={classes.icon}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        );
    }
}

const mapStateToProps = ({
    moviesList: { movies = [] },
}) => {
    return { movies };
};

export default compose(
    withStyles(styles),
    withMoviesDbService(),
    connect(mapStateToProps)
)(MoviesList);
