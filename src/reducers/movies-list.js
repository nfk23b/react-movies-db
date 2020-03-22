import image from '../assets/jay_and_silent_bob_reboot_canadian_movie_poster.jpg';

const updateMoviesList = (state, action) => {

    if (state === undefined) {
        return {
            movies: [
                {
                    id: 0,
                    image: image,
                    title: 'Jay and Silet Bob',
                    author: 'Kevin Smith',
                    year: 2019
                }
            ],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            console.log('FETCH_MOVIES_REQUEST');
            return {
                movies: [],
                loading: true,
                error: null
            };

        case 'FETCH_MOVIES_SUCCESS':
            console.log('FETCH_MOVIES_SUCCESS');
            return {
                movies: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_MOVIES_FAILURE':
            console.log(action.payload);
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