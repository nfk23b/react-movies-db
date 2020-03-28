import React, { Component, Fragment } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { withMoviesDbService } from '../hoc';
import { fetchMovieInfo } from "../../actions";
import { compose } from '../../utils';
import { bindActionCreators } from 'redux';
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';



const styles = theme => ({
    back: {
        color: theme.palette.common.white,
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    backArrow: {
        marginRight: theme.spacing(1)
    },
    list: {
        color: theme.palette.common.white,
        paddingRight: theme.spacing(10),
        width: '69%'
    },
    listItem: {
        paddingLeft: 0,
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        alignItems: 'flex-start',
        borderBottom: `1px solid ${theme.palette.common.white}`
    },
    listItemType: {
        width: theme.spacing(12),
        fontWeight: 'bold',
        display: 'table'
    },
    listItemValue: {
        paddingLeft: 0,
        '& p': {
            margin: 0
        }
    },
    details: {
        display: 'flex',
        marginTop: theme.spacing(3),
        justifyContent: 'space-between'
    },
    poster: {
        marginTop: theme.spacing(5)
    },
    skeletonContainer: {
        marginTop: theme.spacing(5),
        display: 'flex',
        justifyContent: 'space-between'
    }
});

class MoviesInfo extends Component {
    renderRatings = ratings => ratings.map(rating => (
        <p key={rating.Source}>{rating.Source}: {rating.Value}</p>
    ));

    componentDidMount() {
        const {match: { params: { id } }} = this.props;
        this.props.fetchMovieInfo(id);
    }

    render() {
        const { movie: { Poster, ...rest }, classes, loading } = this.props;
        const movieData = Object.entries(rest);
        // if (loading) {
        //         return <Spinner />;
        //     }
            
            // if (error) {
                //     return <ErrorIndicator />;
                // }
                // console.log(this.props);
        return (
            <Box >
                <Typography >
                    <Link to="/" className={classes.back}>
                        <ArrowBackIcon className={classes.backArrow} />
                        Go back
                    </Link>
                </Typography>
                {!loading ?
                    <Box className={classes.details}>
                    <List component="ul" className={classes.list}>
                        {movieData
                        .filter(data => (data[0] !== 'Response' && data[1] !== 'N/A'))
                        .map(data => (
                            <ListItem key={data[0]} className={classes.listItem}>
                                <Typography className={classes.listItemType} >{data[0]}:</Typography>
                                <Typography component="div" className={classes.listItemValue} >{data[0] !== 'Ratings' ? data[1] :  this.renderRatings(data[1])}</Typography>
                            </ListItem>
                        ))
                        }
                    </List>
                    <Box className={classes.poster}>
                        <img src={Poster} alt="Poster" />
                    </Box>
                </Box>
                : 
                <Box className={classes.skeletonContainer}>
                    <Skeleton variant="rect" height={500} width={850} className={classes.skeletonList} />
                    <Skeleton variant="rect" height={500} width={300} className={classes.skeletonPoster} />
                </Box>
            }
                
            </Box>
        );
    }
}

const mapStateToProps = ({
    // moviesList: { movies },
    movieInfo: { movie, loading, ownProps }
}) => {
    return { movie, loading, ownProps };
};

const mapDispatchToProps = (dispatch, { moviesDbService }) => {
    return bindActionCreators(
        {
            // fetchMovies: fetchMovies(moviesDbService),
            fetchMovieInfo: fetchMovieInfo(moviesDbService)
        },
        dispatch
    );
};

export default compose(
    withStyles(styles),
    withMoviesDbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MoviesInfo);
