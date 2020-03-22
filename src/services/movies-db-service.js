export default class MoviesDbService {

    _apiBase = 'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=';


    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "8a58ba9449mshb045f2dacddf717p1b29aejsn12b160b63b11"
            }
        });

        if (!res.ok) {
            throw new Error(`Could't fetch ${url}, recieved ${res.status}`);
        }
        return await res.json();
    };

    getMovies = async (title) => {
        const movies = await this.getResource(title);
        return this._transformMovie(movies);
    };

    _transformMovie = (movies) => {
        return movies.Search.map(({ Title, Year, imdbID, Poster }) => (
            {
                title: Title,
                year: Year,
                id: imdbID,
                image: Poster
            }
            
        ))
    }

}