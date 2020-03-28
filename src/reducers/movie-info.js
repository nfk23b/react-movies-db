import image from '../assets/jay_and_silent_bob_reboot_canadian_movie_poster.jpg';

const getMovieInfo = (state, action) => {
    
    if (state === undefined) {
        return {
            path: window.location.pathname,
            movie: {},
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case 'FETCH_MOVIE_INFO_REQUEST':
            // console.log('FETCH_MOVIE_INFO_REQUEST');
            return {
                path: window.location.pathname,
                movie: {},
                loading: true,
                error: null
            };

        case 'FETCH_MOVIE_INFO_SUCCESS':
            // console.log('FETCH_MOVIE_INFO_SUCCESS');
            return {
                path: window.location.pathname,
                movie: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_MOVIE_INFO_FAILURE':
            // console.log(action.payload);
            return {
                path: window.location.pathname,
                movie: {},
                loading: false,
                error: action.payload
            };
        
        default:
            return state.movieInfo;
    }
};

export default getMovieInfo;