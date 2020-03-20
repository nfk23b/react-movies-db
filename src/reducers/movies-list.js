const updateMoviesList = (state, action) => {

    if (state === undefined) {
        return {
            movies: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return {
                movies: [],
                loading: true,
                error: null
            };

        case 'FETCH_MOVIES_SUCCESS':
            return {
                movies: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_MOVIES_FAILURE':
            return {
                movies: [],
                loading: false,
                error: action.payload
            };
            
        default:
            return state.moviesList;
    }
};

export default updateMoviesList;