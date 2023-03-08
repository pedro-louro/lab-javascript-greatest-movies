// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  else {
    const withScore = moviesArray.filter(movie => movie.score >= 0);
    const sumScore = withScore.reduce((sum, review) => sum + review.score, 0);
    const avg = Number((sumScore / moviesArray.length).toFixed(2));
    console.log(avg);
    return avg;
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovie = moviesArray.filter(movie => movie.genre.includes('Drama'))
  if (!dramaMovie.length) {
    return 0;
  }
  const sumScore = dramaMovie.reduce((sum, review) => sum + review.score, 0)
  return Number((sumScore / dramaMovie.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrayByYear = moviesArray.map((movie) => movie);
  
  arrayByYear.sort(function(a, b) {
    if (a.year > b.year) {
      return 1
    }
    else if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    else {
      return -1
    }
  })
  return arrayByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// try with slice

function orderAlphabetically(moviesArray) {
  const arrayAlpha = moviesArray.map((movie) => movie);
  arrayAlpha.sort((a, b) => a.title.localeCompare(b.title));
  const firstTwenty = [];
  
  if (arrayAlpha.length <= 20) {
    for (let i = 0; i < arrayAlpha.length; i++) {
      firstTwenty.push(arrayAlpha[i].title)
    }
  }
  else {
    for (let i = 0; i < 20; i++) {
      firstTwenty.push(arrayAlpha[i].title)
    }
  }
  return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  
const finalArray = JSON.parse(JSON.stringify(moviesArray));
  finalArray.forEach(movie => {
    const hourInMinutes = Number(movie.duration.substr(0, 1)) * 60;
    const minutes = movie.duration.substr(3, 2);
    
    if (minutes[1] === 'm') {
      movie.duration = hourInMinutes + Number(minutes[0]);
    }
    else {
      movie.duration = hourInMinutes + Number(minutes);
    }
  })
  return finalArray;
};



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }
  // sort movies by year so that I can use a while loop stsrting by the oldest movie 
  const sortByYear = moviesArray.sort((a, b) => a.year - b.year);
  //array to store the avg of each year
  let avgsArray = []

  let checkYear = sortByYear[0].year

  while (checkYear <= sortByYear[sortByYear.length - 1].year) {
    const yearScores = sortByYear.filter(movie => movie.year === checkYear);
    if (yearScores.length) {
      let avg = yearScores.reduce((sum, movieScore) => sum + movieScore.score, 0) / yearScores.length
      avgsArray.push({year: checkYear, avg: avg})
    }
    checkYear++
  }
  // sort the array by the highets avg
  const getBestYear = avgsArray.sort((a,b) => b.avg - a.avg)
  return `The best year was ${getBestYear[0].year} with an average score of ${getBestYear[0].avg}`
}
