'use strict';

angular.module('todoListApp')
.service('dataService', function($http){
  this.helloWorld = function(){
    console.log("this is data service's method!");
  };

  this.getTodos=function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.saveTodos
});
