exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + '44986d9e9bb194c6b44123cf12ae2c76e119861c').then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
