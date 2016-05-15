var theApp=angular.module("MyApp", []);
theApp.controller("MyNewController", function($scope, DataService){
  "use strict";

        //object name             //Get Array
  $scope.addresses = DataService.getAddresses();

  // Save Button
  $scope.addNewAddress=function(){
    //ng-model names from index.html
    DataService.saveAddress($scope.newAddress.name, $scope.newAddress.street,
    $scope.newAddress.city, $scope.newAddress.state, $scope.newAddress.zipCode);
    $scope.newAddress = {}; //Clears input fields for next use
  };

  // Delete Button
    //Name from index.html
  $scope.removeMe = function(idx){ //Object name can be anything
    DataService.removeAddressAt(idx);
  };

  //Clear Button
    //Name from index.html
  $scope.clearIt = function(){
    DataService.destroyLocalStorage(); //Look up JS local storage
  };

});
