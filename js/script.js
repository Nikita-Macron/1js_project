"use strict";

const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const pesonalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

pesonalMovieDB.movies[a] = b;
pesonalMovieDB.movies[c] = d;

console.log(pesonalMovieDB);