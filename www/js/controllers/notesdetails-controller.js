(function(){
  'use strict';

  angular.module('starter')
  .controller('NotesDetailsCtrl', function($scope, User, $state, Note){
    $scope.note = {};

    Note.show($state.params.noteId).then(function(response){
      console.log('notesdetails', response);
      $scope.note = response.data;
    });
  });
})();

