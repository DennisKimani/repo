var apiKey = require('./../.env').apiKey;

repository = function() {

};

findthem = function(){

};

repository.prototype.getrepository = function(name,displayFunction){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    displayFunction(response.name);
  }).fail(function(error) {
    console.log('error');
  });
};

findthem.prototype.getfindthem = function(repos,displayFunction){
  $.get('https://api.github.com/users/' + name + '/repos/?access_token=' + apiKey).then(function(response){
    displayFunction(response.repos);
  }).fail(function(error) {
    console.log('error');
  });
};

exports.repositoryModule = repository;
exports.findthemModule = findthem;
