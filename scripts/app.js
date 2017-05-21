
angular.module("todoListApp",[])
.controller('mainCtrl',function($scope, dataService){
  $scope.helloConsole = dataService.helloConsole;
  $scope.learningNgChange = function(){

      console.log("An input change");
    };

})
.service('dataService', function($http){
  this.helloConsole = function(){
      console.log("this is hello console service!");
  };
  this.gestTodos =
});
