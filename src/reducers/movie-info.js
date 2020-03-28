const getMovieInfo = (state, action) => {
    
    if (state === undefined) {
        return {
            movie: {},
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case 'FETCH_MOVIE_INFO_REQUEST':
            return {
                movie: {},
                loading: true,
                error: null
            };

        case 'FETCH_MOVIE_INFO_SUCCESS':
            return {
                movie: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_MOVIE_INFO_FAILURE':
            return {
                movie: {},
                loading: false,
                error: action.payload
            };
        
        default:
            return state.movieInfo;
    }
};

export default getMovieInfo;