'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null & a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }

// }
// console.log(personalMovieDB);


function returnNeighboringNumbers(number) {
    return [number - 1, number, number +1];
}
returnNeighboringNumbers(5);

console.log('Hello world!!!!!');