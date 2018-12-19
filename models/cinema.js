const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function (){
  const result = this.films.map((film) => {
    return film.title
  })
  return result;
};

Cinema.prototype.findByTitle = function (title){
  return this.films.find((film) => {
    return film.title === title;
  })
  // return result;
}

Cinema.prototype.findByGenre = function(genre){
  return this.films.filter((film) => {
    return film.genre === genre;
  })
}

Cinema.prototype.checkYears = function(year){
  return this.films.some((film) => {
    return film.year === year;
  })
}

Cinema.prototype.checkAllLengthOver = function(length){
  return this.films.every((film) => {
    return film.length > length;
  })
}

Cinema.prototype.totalRunningTime = function(){
  return this.films.reduce((total, film) => {
    return total + film.length;
  }, 0)
}

Cinema.prototype.filmsByProperty = function(property, value){
  return this.films.filter((film) => {
    return this.films === property && value;
  })
}






module.exports = Cinema;
