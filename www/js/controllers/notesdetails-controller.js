(function(){
  'use strict';

  angular.module('starter')
  .controller('NotesDetailsCtrl', function($scope, User, $state, Note){

    $scope.note = {};
    getNote();

    function getNote(){
      Note.show($state.params.noteId).then(function(response){
        console.log('notesdetails', response);
        $scope.note = response.data;
      });
    }

    function success(b64){
      console.log('b64', b64);
      Note.savePhoto(b64, $state.params.noteId).then(function(response){
        console.log('server response', response);
        getNote();
      });
    }

    function error(msg){
      console.log('err:', msg);
    }

    $scope.snap = function(){
      var options = {
        quality: 20,
        destinationType: Camera.DestinationType.DATA_URL
      };

      navigator.camera.getPicture(success, error, options);
    };
    $scope.choose = function(){
      var options = {
        quality: 20,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };
      navigator.camera.getPicture(success, error, options);
    };
  });
})();

