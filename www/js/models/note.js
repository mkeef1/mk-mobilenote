(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', function($http, origin){


  function count(){
    return $http.get(origin + '/notes/count');
  }

  function query(tag, page){
    return $http.get(origin + '/notes?limit=5&offset=' + 5 * page + '&tag=' + tag);
  }

  function show(noteId){
    return $http.get(origin + '/notes/' + noteId);
  }

  function savePhoto(pic, id){
    return $http.post(origin + '/notes/save/' + id, {pic:pic});
  }

  return {count:count, query:query, show:show, savePhoto:savePhoto};
  });
})();
