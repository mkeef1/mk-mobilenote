(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', function($http){


  function count(){
    return $http.get('http://localhost:4227/notes/count');
  }

  return {count:count};
  });
})();
