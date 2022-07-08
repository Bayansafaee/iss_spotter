const printPassTimes = (flyOverTimes) => {
  for (const times of flyOverTimes) {
    const time = new Date(0);
    time.setUTCSeconds(times.risetime);
    const duration = times.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
};

module.exports = {
  printPassTimes
};