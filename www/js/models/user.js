(function(){
  'use strict';

  angular.module('starter')
  .factory('User', ['$http', function($http){


    function login(user){
      return $http.post('http://localhost:4227/login', user);
    }


    return {login:login};
  }]);
})();
