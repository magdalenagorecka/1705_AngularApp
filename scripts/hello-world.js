angular.module("todoListApp")
.directive("helloWorld",function() {
  return{
    template:"THIS IS THE HELLO WORLD DIRECTIVE",
    restrict:"E"
  };
});
