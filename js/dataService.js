angular.module("MyApp").service("DataService", function(){
  "use strict";
  //Array with no objects []
  var addressArray = [];

  this.getAddresses = function(){ //Matches line 5 on app.js page. Gets the data
    var myVariable = JSON.parse(localStorage.getItem("addressesLS")) || []; // Gets the Data
    addressArray = myVariable; //Sets the data
      console.log(myVariable);
    return addressArray; // Returns the array
  };

  this.saveAddress = function(pName, pAddress, pCity, pState, pZip){ //New Object name can be anything.
    var savedAddresses = {name:pName, address:pAddress, city:pCity, state:pState, zip:pZip};//Left of colon comes from the index
    addressArray.push(savedAddresses); //Adds new information to the array
    localStorage.setItem("addressesLS", JSON.stringify(addressArray)); //Stores data in the browsers cache
  };

  this.removeAddressAt = function(pIndex){
    addressArray.splice(pIndex,1);
    localStorage.setItem("addressesLS", JSON.stringify(addressArray));
  };

  this.destroyLocalStorage = function(){//Matches the app.js
    addressArray.splice(0); //Remove all address information form the array and local storage
    localStorage.clear(); //Clear your local storage
  };

});
