(function(){
  'use strict';

  angular.module('starter')
  .factory('User', ['$http', function($http){


    function login(user){
      return $http.post('/login', user);
    }


    return {login:login};
  }]);
})();
