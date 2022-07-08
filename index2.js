const { nextISSTimesForMyLocation } = require('./iss_promised');

const { printPassTimes } = require('./printPassTimes');

nextISSTimesForMyLocation()
  .then(flyOverTimes => printPassTimes(flyOverTimes))
  .catch(error => console.log("It didn't work: ", error.message));
