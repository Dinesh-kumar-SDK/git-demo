//1)	& 2)
class Movie {
 //creating constructor
 constructor(title, studio, rating) {
 this.title = title;
 this.studio = studio;
 this.rating = rating;
 //for rating = PG if ratings is not mentioned
 if (typeof this.rating == "undefined") {
 this.rating = "PG";
 }
 }
 }
let mov1 = new Movie("KGF", " Hombale Films");
let mov2 = new Movie("Leo", "7 Screen Studio", "5");
let mov3 = new Movie("Avengers:Endgame", "Marvel Studios", "5");
let mov4 = new Movie("Batman vs Superman”, “DC Entertainment",5);
console.log(mov1);
//3)
 //function to get title list if rating = PG
function getPG(mov) {
 let res = []
 for (let i = 0; i < mov.length; i++) {
if (mov[i].rating == 'PG') {
 res.push(mov[i].title);
 }
 }
 return res;
}
let arr = [mov1, mov2, mov3, mov4]
console.log(getPG(arr))
//4)
//creating instance of class Movie
let mov5 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
console.log(mov5);