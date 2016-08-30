var request = require('request');
request('http://localhost:3000', function (error, response, body) {
  console.log(response);
});

request.post({
  url:'http://localhost:3000/submit',
  form: {foo : "bar"}
},
  function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
