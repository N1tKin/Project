/* Практическое задание_1
const NumbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
 const PersonalMovieDB = {
     count:NumbersOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
 };
 const a = prompt("Один из последних");
 const b = prompt("Оцени его");
 const d = prompt("Один из последних");
 const e = prompt("Оцени его");
 PersonalMovieDB.movies[a] = b;
 PersonalMovieDB.movies[d] = e;
 console.log(PersonalMovieDB);
 */
/*  Логические операторы    */ 
const hamburger = true;
const fries = false;
if(hamburger || fries) {
    console.log("я ссыт");  
} else {
    console.log("ты не сыт")
}