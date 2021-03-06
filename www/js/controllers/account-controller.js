(function(){
  'use strict';

  angular.module('starter')
  .controller('AccountCtrl', function($scope, User, $state, $rootScope){
    $scope.user = {};
    $scope.login = function(user){
      User.login(user).then(function(response){
        console.log(response);
        $rootScope.rootuser = response.data;
        $state.go('tab.dash');
        $scope.user = {};
      }, function(){
        $scope.user = {};
      });
    };
  });
})();
