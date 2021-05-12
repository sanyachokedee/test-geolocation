// check for Geolocation support
if (navigator.geolocation) {
    console.log('Geolocation is supported!');
    alert('Geolocation is supported!');
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
    alert('Geolocation is not supported for this Browser/OS version yet.');
  }

//   window.onload = function() {
//     var startPos;
//     navigator.geolocation.getCurrentPosition(function(position) {
//       // same as above
//       document.getElementById('currentLat').innerHTML = position.coords.latitude;
//       document.getElementById('currentLon').innerHTML = position.coords.longitude;
//     }, function(error) {
//       alert('Error occurred. Error code: ' + error.code);
//       // error.code can be:
//       //   0: unknown error
//       //   1: permission denied
//       //   2: position unavailable (error response from locaton provider)
//       //   3: timed out
//     });
//   };

  window.onload = function() {
    var startPos;
    navigator.geolocation.getCurrentPosition(function(position) {
      startPos = position;
      document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon').innerHTML = startPos.coords.longitude;
      document.getElementById('startLat2').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon2').innerHTML = startPos.coords.longitude;
    });
  };