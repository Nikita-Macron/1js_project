"use strict";

const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const pesonalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        pesonalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (pesonalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (pesonalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(pesonalMovieDB);