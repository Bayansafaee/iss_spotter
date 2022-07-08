const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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

const ranCoords = { latitude: '34.6937378', longitude: '135.5021651' };

fetchISSFlyOverTimes(ranCoords, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , flyOverTimes);
});

