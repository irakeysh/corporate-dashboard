(function () {
    'use strict';

    angular.module('app').factory('issues', [ '$firebaseArray', '$http',
    function($firebaseArray, $http){
      var ref = firebase.database().ref().child("issues");

      function get(){
        return $firebaseArray(ref);
      }

      return {
        get   : get
      };

    }]);
})();
