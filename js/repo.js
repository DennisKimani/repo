var apiKey = require('./../.env').apiKey;

exports.getRepository = function(){
  $.get('https://api.github.com/users/ + ?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
exports.repositoryModule = repository;
