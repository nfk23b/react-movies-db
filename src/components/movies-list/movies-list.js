import React, { Component } from 'react';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import { withMoviesDbService } from '../hoc';
import { compose } from '../../utils';
import { bindActionCreators } from 'redux';
import { GridList, GridListTile, GridListTileBar, makeStyles, IconButton, ListSubheader, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import InfoIcon from '@material-ui/icons/Info';

const styles = makeStyles(theme => ({
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
    gridList: {
        margin: '0 !important',
        width: '100%',
        height: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

class MoviesList extends Component {
    

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {

        const { movies, loading, error, classes } = this.props;
        
        return (
            <Box className={classes.box}>
                <GridList cellHeight={180} className={classes.gridList} cols={4} spacing={10} >
                    {movies.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}
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

const mapStateToProps = ({ moviesList: {movies, loading, error } }) => {
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
