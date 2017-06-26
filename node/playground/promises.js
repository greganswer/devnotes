// let asyncAdd = (a, bug) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === 'number' && typeof b == 'number') {
//         resolve(a + b);
//       } else {
//         reject('Arguments must be numbers')
//       }
//     }, 2000)
//   });
// };
//
// asyncAdd(5, 7).then((resolve) => {
//   console.log('Result: ', resolve);
//   return asyncAdd(resolve, 33);
// }).then((resolve) => {
//   console.log('Should be 45: ', resolve);
// }).catch((rejection) => {
//   console.log(rejection);
// });


const request = require('request');

let geocodeAddress = (address) => {
  let endpoint = 'https://maps.googleapis.com/maps/api/geocode/json'
  let encodedAddress = encodeURIComponent(address);
  let url = `${endpoint}?address=${encodedAddress}`;

  return new Promise((resolve, reject) => {
    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      }
    });
  });
};

geocodeAddress('123456')
  .then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
  }, (errorMessage) => {
    console.log(errorMessage);
  });
