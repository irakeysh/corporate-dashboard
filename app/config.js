(function(){
     'use strict';
     angular.module('app').run(function() {
       // Initialize Firebase
       var config = {
         apiKey: "",
         authDomain: "",
         databaseURL: "",
         storageBucket: "",
         messagingSenderId: ""
       };

       firebase.initializeApp(config);
     });
})();
