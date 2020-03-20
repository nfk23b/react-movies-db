import image from '../assets/jay_and_silent_bob_reboot_canadian_movie_poster.jpg';

export default class MoviesDbService {
    data = [
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        {
            img: image,
            title: 'Jay and Silet Bob',
            author: 'Kevin Smith',
        },
        ];

    getMovies() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.data)
            }, 300);
        });
    }
}