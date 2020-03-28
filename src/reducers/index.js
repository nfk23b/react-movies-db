import updateMoviesList from './movies-list';
import getMovieInfo from './movie-info';

const reducer = (state, action) => {
    return {
        moviesList: updateMoviesList(state, action),
        movieInfo: getMovieInfo(state, action)
    }
};

export default reducer;