export default class MoviesDbService {
    _apiBase =
        "https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&s=";
    _detailedInfoApi =
        "https://movie-database-imdb-alternative.p.rapidapi.com/?i=";
    
    getResource = async (title, id) => {
        let api = `${this._apiBase}${title}`;

        if (id) {
            api = `${this._detailedInfoApi}${id}`;
        }

        const res = await fetch(api, {
            method: "GET",
            headers: {
                "x-rapidapi-host":
                    "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key":
                    "8a58ba9449mshb045f2dacddf717p1b29aejsn12b160b63b11"
            }
        });

        if (!res.ok) {
            throw new Error(`Could't fetch ${title}, recieved ${res.status}`);
        }

        return await res.json();
    };

    getMovies = async title => {
        const movies = await this.getResource(title);
        return this._transformMovie(movies);
    };

    getMovieInfo = async (id) => {
        return await this.getResource(null, id);
    };

    _transformMovie = movies => {
        const data = movies.totalResults;

        return movies.Search.map(({ Title, Year, imdbID, Poster }) => ({
            title: Title,
            year: Year,
            id: imdbID,
            image: Poster,
            total: data
        }));
    };
}
