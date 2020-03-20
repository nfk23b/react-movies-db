import updateMoviesList from './movies-list';

const reducer = (state, action) => {
    return {
        moviesList: updateMoviesList(state, action)
    }
};

export default reducer;