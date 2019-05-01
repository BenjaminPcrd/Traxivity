import GoogleFit, { Scopes } from 'react-native-google-fit'
/*
Scopes.FITNESS_ACTIVITY_READ,
Scopes.FITNESS_ACTIVITY_READ_WRITE,
Scopes.FITNESS_LOCATION_READ,
Scopes.FITNESS_LOCATION_READ_WRITE,
Scopes.FITNESS_BODY_READ,
Scopes.FITNESS_BODY_READ_WRITE,
Scopes.FITNESS_NUTRITION_READ,
Scopes.FITNESS_NUTRITION_READ_WRITE,
Scopes.FITNESS_BLOOD_PRESSURE_READ,
Scopes.FITNESS_BLOOD_PRESSURE_READ_WRITE,
Scopes.FITNESS_BLOOD_GLUCOSE_READ,
Scopes.FITNESS_BLOOD_GLUCOSE_READ_WRITE,
Scopes.FITNESS_OXYGEN_SATURATION_READ,
Scopes.FITNESS_OXYGEN_SATURATION_READ_WRITE,
Scopes.FITNESS_BODY_TEMPERATURE_READ,
Scopes.FITNESS_BODY_TEMPERATURE_READ_WRITE,
Scopes.FITNESS_REPRODUCTIVE_HEALTH_READ,
Scopes.FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE
*/
export function getAuth() {
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_LOCATION_READ,
    ],
  }
  GoogleFit.authorize(options)
   .then(() => {
     console.log("AUTH_SUCCESS")
   })
   .catch(() => {
     console.log("AUTH_ERROR")
   })
}

export function getDayStepCount(callback) {
  var start = new Date()
  var end = new Date()
  const UTC_OFFSET = start.getTimezoneOffset()/60
  start.setHours(0 - UTC_OFFSET, 0, 0, 0)
  end.setHours(23 - UTC_OFFSET, 59, 59, 999)
  const opt = {
    startDate: start,
    endDate: end
  };
  GoogleFit.getDailyStepCountSamples(opt, (err, res) => {
    if(err) {
      callback(err, 0)
    } else (
      callback(false, res[2].steps[0].value)
    )
  })
}

export function getWeekStepCount(callback) {
  //var start = new Date('2019-04-25T19:24:00')
  var start = new Date()
  //var end = new Date('2019-04-25T19:24:00')
  var end = new Date()
  var nbDays = start.getDay();
  if(nbDays == 0) nbDays = 7
  start.setHours(0, 0, 0, 0)
  end.setHours(23, 59, 59, 999)
  start.setDate(start.getDate() - (nbDays-1))
  const opt = {
    startDate: start,
    endDate: end
  };
  GoogleFit.getDailyStepCountSamples(opt, (err, res) => {
    if(err) {
      callback(err, 0)
    } else (
      callback(false, res[2].steps)
    )
  })
}

export function getDailyCalorieCount(callback) {
  var start = new Date()
  var end = new Date()
  const UTC_OFFSET = start.getTimezoneOffset()/60
  start.setHours(0 - UTC_OFFSET, 0, 0, 0)
  end.setHours(23 - UTC_OFFSET, 59, 59, 999)
  const opt = {
    startDate: start,
    endDate: end,
    basalCalculation: false
  };
  GoogleFit.getDailyCalorieSamples(opt, (err, res) => {
    if(err) {
      callback(err, 0)
    } else (
      callback(false, res[0].calorie.toFixed(0))
    )
  });
}

export function getDailyDistanceCount(callback) {
  var start = new Date()
  var end = new Date()
  const UTC_OFFSET = start.getTimezoneOffset()/60
  start.setHours(0 - UTC_OFFSET, 0, 0, 0)
  end.setHours(23 - UTC_OFFSET, 59, 59, 999)
  const opt = {
    startDate: start,
    endDate: end
  };
  GoogleFit.getDailyDistanceSamples(opt, (err, res) => {
    if(err) {
      callback(err, 0)
    } else (
      callback(false, res)
    )
  })
}
