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
/*  Логические операторы    
const hamburger = true;
const fries = false;
if(hamburger || fries) {
    console.log("я ссыт");  
} else {
    console.log("ты не сыт")
}
*/ 
/*nested loops // вложенные циклы//циклы в цикле*/
/*Задача с построением пирамиды*/
// let result = '';
// const length = 7;
// for ( let i = 1; i<length; i++) {
//     for( let j = 0; j < i; j++){
//         result += "*";
//     }
//     result += '\n';

// }
// console.log(result);



//  function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i)
//     }
// }

// secondTask();


// //function thirdTask() {
//     for(let i = 1; i<11; i++){
//         if(i % 2 === 0)
//         console.log(i);
//     }
// }
// //thirdTask();
// function fourthTask() {
//     let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }
// fourthTask();

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     return result;
// }

// firstTask(); Задание на проверку типизации массива и работы с ним(1).
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for(let i=0;i<data.length;i++){
//         if (typeof(data[i])===Number){
//             data[i] = data[i]*2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = ` ${data[i]} - done `;
//         }
//     } 
//     console.log(data);   
//     // Не трогаем
//     return data;
// }
// secondTask();
