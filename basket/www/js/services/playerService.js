angular.module('playerService',[])

.factory('Player', function($http){
    
    var playerFactory = {};
    
    // get a single user
    playerFactory.get = function(id) {
        return $http.get('http://192.168.50.111:8081/api/players/'+id);  
    };
    
    // get all players
    playerFactory.all = function() {
        return $http.get('http://192.168.50.111:8081/api/players');
    };
    
    // create a player
    /*playerFactory.create = function(playerData) {
        return $http.post('https://basket2-gioele89.c9.io/api/players', playerData);
    };
    
    // update a player
    playerFactory.update = function(id, playerData) {
        return $http.put('https://basket2-gioele89.c9.io/api/players/'+id, playerData);
    };
    
    // delete a player
    playerFactory.delete = function(id) {
        return $http.delete('https://basket2-gioele89.c9.io/api/players/'+id);
    };
    
    // send player picture
    playerFactory.setPicture = function(id) {
        return $http.post('https://basket2-gioele89.c9.io/api/players/'+id+'/picture');
    };*/
    
    return playerFactory;

});