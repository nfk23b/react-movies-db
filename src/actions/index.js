const moviesLoaded = (newMovies) => {
    return {
        type: 'FETCH_MOVIES_SUCCESS',
        payload: newMovies
    };
};

const moviesRequested = () => {
    return {
        type: 'FETCH_MOVIES_REQUEST'
    }
}

const moviesError = (error) => {
    return {
        type: 'FETCH_MOVIES_FAILURE',
        payload: error
    }
}

const fetchMovies = (moviestoreService) => () => (dispatch) => {
    dispatch(moviesRequested());
    moviestoreService.getMovies()
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

export {
    fetchMovies,
};