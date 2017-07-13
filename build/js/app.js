(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "44986d9e9bb194c6b44123cf12ae2c76e119861c";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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
  var currentfindthemObject = new findthem();
  console.log('nice');
  $('#what').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var repos = $('#yeah').val();
    $('#location').val("");
    currentfindthemObject.getfindthem(repos, displayFunction);
  });
});

},{"./../js/repo.js":2}]},{},[3]);
