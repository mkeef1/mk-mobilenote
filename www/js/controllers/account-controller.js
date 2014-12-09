(function(){
  'use strict';

  angular.module('starter')
  .controller('AccountCtrl', function($scope, User, $state){
    $scope.user = {};
    $scope.login = function(user){
      User.login(user).then(function(response){
        $state.go('tab.dash');
        $scope.user = {};
      }, function(){
        $scope.user = {};
      });
    };
  });
})();
