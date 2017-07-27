//Constructor for Books object
//subclass of Media

function Books(title, author, ratings){
  this.title = title;
  this.author = author;
  this.ratings = ratings;
  this.checkedOut = false;
  this.show = function(){ //this works
  return console.log(this.title + ", written by: " + this.author + ".");
};
};


//Constructor for CDs object
//subclass of Media
function CDs(title, artist, ratings){
  this.title = title;
  this.artist = artist;
  this.ratings = ratings;
  this.checkedOut = false;
  this.show = function(){ //this works
  return console.log(this.title + ", a masterpiece metal album by: " + this.artist + ".");
};
}



//Constructor for Movies object
//subclass of Media
function Movies(title, director, ratings){
  this.title = title;
  this.director = director;
  this.ratings = ratings;
  this.checkedOut = false;
  this.show = function(){ //this works
  return console.log(this.title + ", directed by: " + this.director + ".");
};
}



//Constructor for Media Object
//superclass of Books, Media, CDs
function Media(){
  this.ratings;
  this.averageRatings = function(){ //This works
    var n = this.ratings.length;
    var sum = this.ratings.reduce(function(a, b){
        return a + b;
      }, 0);

    return console.log(Math.floor(sum / n));
  }
}


Books.prototype = new Media();
CDs.prototype = new Media();
Movies.prototype = new Media();

var library = [];
var exampleBook = new Books("Eloquent JavaScript", "Marijn Haverbeke", [10, 10, 9, 9, 9]);
var exampleCD = new CDs("An Ocean Between Us", "As I Lay Dying", [8, 4, 9, 10]);
var exampleMovie = new Movies("Interstellar", "Christopher Nolan", [8, 10, 5]);


library.push(exampleBook);
library.push(exampleMovie);
library.push(exampleCD);

console.log(library);
