angular.module('playersCtrl', ['playerService'])

.controller('playersController', function(Player){
   var players = this;
   
   players.title = "Players";
   
   Player.all()
        .success(function(data){
            players.playerList = data;
        })
        .error(function(data){
           console.log('error:playerController');
        });
})

.controller('playerDetailController', function($stateParams){
    var players = this;
    players.player = $stateParams.player;
    console.log(players.player);
});