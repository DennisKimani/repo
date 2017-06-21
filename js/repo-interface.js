var repository = require('./../js/repo.js').repositoryModule;
var findthem = require('./../js/repo.js').findthemModule;

var displayFunction = function(name) {
  $('#showResults').text(name);
};


$(document).ready(function() {
  var currentrepositoryObject = new  repository();
  console.log('ready');
  $('#what').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var name = $('#yeah').val();
    $('#location').val("");
    currentrepositoryObject.getrepository(name, displayFunction);
  });
  var currentfindthemObject = new findthem();;
  $('#what').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var repos = $('#yeah').val();
    $('#location').val("");
      console.log('nice')
    currentfindthemObject.getfindthem(repos, displayFunction);
  });
});
