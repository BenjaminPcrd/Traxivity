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
  GoogleFit.isAvailable((error, res) => {console.log("isAvailable " + error + res)})
  GoogleFit.isEnabled((error, res) => {console.log("isEnabled " + error + res)})
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
  GoogleFit.onAuthorizeFailure((res) => {
    console.log(res)
  })
  GoogleFit.onAuthorize((res) => {
    console.log(res)
  })
}


export function getDailyStepCount() {
  var start = new Date()
  var end = new Date()
  start.setHours(0, 0, 0, 0)
  end.setHours(23, 59, 59, 999)
  GoogleFit.getDailyStepCountSamples(start, end)
    .then((res) => {
      console.log(res[2].steps[0].value)
    })
    .catch((err) => {
      console.warn(err)
    })

}
