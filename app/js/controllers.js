'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S'},
    {'name': 'Motorola XOOM with Wifi',
     'snippet': 'The super next generation tablet'},
    {'name': 'Motorola XOOM',
     'snippet': 'The next generation tablet'}
  ];

  $scope.hello = function() { return "Hello world!!!" };
});
