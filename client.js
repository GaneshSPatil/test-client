var request = require('request');
var info = require('./userInfo.js').info;
var fs = require('fs');
var option = process.argv[2];

var actions = {};

actions.submit = function(){
  var code = fs.readFileSync('./code.js', 'utf8');
  request.post({
    url:'http://localhost:3000/submit',
    form: {
      id : info.userId,
      name: info.userName,
      code : code,
    }
  },function optionalCallback(err, httpResponse, res) {

    if (err) {
      return console.error('Can not submit, Error:', err);
    }else{
      res = JSON.parse(res);
      console.log(res.message);
      fs.writeFileSync('./test.js', res.tests)
    }
  });
};


try{
  actions[option]();
}catch(e){
  if(option){
    console.log('option', option, 'is not allowed');
  }else {
    console.log('Provide an option');
  }
}
