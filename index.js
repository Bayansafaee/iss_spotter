const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('111.111.111.111', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates: ', coordinates)
// })

// const ranCoords = { latitude: '34.6937378', longitude: '135.5021651' };

// fetchISSFlyOverTimes(ranCoords, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , flyOverTimes);
// });


const printPassTimes = (flyOverTimes) => {
  for (const times of flyOverTimes) {
    const time = new Date(0);
    time.setUTCSeconds(times.risetime);
    const duration = times.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(flyOverTimes);
});