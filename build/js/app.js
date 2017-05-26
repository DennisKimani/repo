(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "44986d9e9bb194c6b44123cf12ae2c76e119861c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepository = function(){
  $.get('https://api.github.com/users/ + ?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
exports.repositoryModule = repository;

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var repository = require('./../js/repo.js').repositoryModule;

$(document).ready(function() {
  $('#what').click(function() {
    var project = $('#yeah').val();
    $('#yeah').val("");
  });
});

},{"./../.env":1,"./../js/repo.js":2}]},{},[3]);
