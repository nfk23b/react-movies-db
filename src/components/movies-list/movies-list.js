import React, { Component } from "react";
import { connect } from "react-redux";
import { withMoviesDbService } from "../hoc";
import { compose } from "../../utils";
import {
    Box,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import InfoIcon from "@material-ui/icons/Info";
import Skeleton from '@material-ui/lab/Skeleton';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const styles = theme => ({
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    skeletonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -5px 0',
        '& span' : {
            margin: '10px 5px 0',
        }
    }
});

const MoviesList = ({ movies, loading, classes, width }) => {

    const getSkeletonColsWidth = () => {
        if (isWidthDown('xs', width)) {
            return '100%';
        } else if (isWidthDown('sm', width)) {
            return 'calc(50% - 10px)';
        } else if (isWidthDown('md', width)) {
            return 'calc(20% - 10px)';
        } else if (isWidthDown('lg', width)) {
            return 'calc(20% - 10px)';
        } else if (isWidthDown('xl', width)) {
            return 'calc(20% - 10px)';
        }
      }
    const getGridListCols = () => {
        if (isWidthDown('xs', width)) {
            return 1;
        } else if (isWidthDown('sm', width)) {
            return 2;
        } else if (isWidthDown('md', width)) {
            return 5;
        } else if (isWidthDown('lg', width)) {
            return 5;
        } else if (isWidthDown('xl', width)) {
            return 5;
        }
      }
    
        return (
            <Box>
                {!loading ? 
                <GridList
                    cellHeight={180}
                    cols={getGridListCols()}
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
                : 
                <Box  className={classes.skeletonContainer}>
                    {[...Array(10)].map((x, i) =>
                        <Skeleton variant="rect" height={180} width={getSkeletonColsWidth()} key={i}/>
                    )}
                </Box>
                }
            </Box>
        );
}

const mapStateToProps = ({
    moviesList: { loading, movies = [] },
}) => {
    return { loading, movies };
};

export default compose(
    withWidth(),
    withStyles(styles),
    withMoviesDbService(),
    connect(mapStateToProps)
)(MoviesList);
