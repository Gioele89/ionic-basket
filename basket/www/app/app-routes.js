angular.module('basketRoutes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/player');
    
    $stateProvider
    
        .state('players', {
            abstract: true,
            url: '/players',
            views: {
                players: {
                    template: "<ion-nav-view></ion-nav-view>"
                }
            }
        })
        
        .state('players.index', {
            url: '',
            templateUrl : 'app/views/pages/players/players.html',
            controller  : 'playersController as players', 
        })
    
        .state('players.detail', {
            url: '',
            params: {player:{}},
            templateUrl : 'app/views/pages/players/player-detail.html',
            controller  : 'playerDetailController as playerDetail'
        });
});