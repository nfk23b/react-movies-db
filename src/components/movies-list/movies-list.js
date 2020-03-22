import React, { Component } from 'react';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import { withMoviesDbService } from '../hoc';
import { compose } from '../../utils';
import { bindActionCreators } from 'redux';
import { GridList, GridListTile, GridListTileBar, IconButton, Box, Tooltip  } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import InfoIcon from '@material-ui/icons/Info';

const styles = (theme) => ({
    grid: {
        backgroundColor: theme.palette.secondary.main
    },
    box: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class MoviesList extends Component {
    
    render() {

        const { movies, loading, error, classes } = this.props;
        console.log(movies)
        return (
            <Box className={classes.box}>
                <GridList cellHeight={180} className={classes.gridList} cols={4} spacing={10} >
                    {movies.map(tile => (
                    <GridListTile key={tile.id}>
                        <img src={tile.image} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>year: {tile.year}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                    </GridListTile>
                    ))}
                </GridList>
            </Box>
        )
    }
}

const mapStateToProps = ({ moviesList: { movies = [], loading, error } }) => {
    return { movies, loading, error }
};

const mapDispatchToProps = (dispatch, { moviesDbService }) => {
    return bindActionCreators({
        fetchMovies: fetchMovies(moviesDbService)
    }, dispatch)
};

export default compose(
    withStyles(styles),
    withMoviesDbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MoviesList);
