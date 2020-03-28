import image from '../assets/jay_and_silent_bob_reboot_canadian_movie_poster.jpg';

const updateMoviesList = (state, action) => {

    if (state === undefined) {
        return {
            movies: [
                {
                    id: 'tt6521876',
                    image: image,
                    title: 'Jay and Silet Bob',
                    author: 'Kevin Smith',
                    year: 2019
                }
            ],
            loading: false,
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