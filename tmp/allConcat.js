var apiKey = require('./../.env').apiKey;
var repository = require('./../js/repo.js').repositoryModule;

$(document).ready(function() {
  $('#what').click(function() {
    var project = $('#yeah').val();
    $('#yeah').val("");
  });
});
