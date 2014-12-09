(function(){
  'use strict';

  angular.module('starter')
  .controller('DashCtrl', function($scope, User, $state, Note, $rootScope){
    $scope.note = {};
    $scope.notes = [];
    //$scope.count = 0;

    Note.count().then(function(response){
      console.log('response', response);
      $scope.count = response.data.count;
      //$scope.notes = response.data;
    });

    $scope.logout = function(){
      User.logout().then(function(){
        $rootScope.rootuser = null;
        $state.go('tab.account');
      });
    };
  });
})();
