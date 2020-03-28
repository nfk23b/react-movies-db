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

const movieInfoLoaded = (newMovies) => {
    return {
        type: 'FETCH_MOVIE_INFO_SUCCESS',
        payload: newMovies
    };
};

const movieInfoRequested = () => {
    return {
        type: 'FETCH_MOVIE_INFO_REQUEST'
    }
}

const movieInfoError = (error) => {
    return {
        type: 'FETCH_MOVIE_INFO_FAILURE',
        payload: error
    }
}

const fetchMovies = (moviesDbService) => (title) => (dispatch) => {
    dispatch(moviesRequested());
    moviesDbService.getMovies(title)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

const fetchMovieInfo = (moviesDbService) => (title, id) => (dispatch) => {
    dispatch(movieInfoRequested());
    moviesDbService.getMovieInfo(title, id)
    .then((data) => dispatch(movieInfoLoaded(data)))
    .catch((err) => dispatch(movieInfoError(err)));
};

export {
    fetchMovies,
    fetchMovieInfo
};