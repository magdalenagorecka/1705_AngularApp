'use strict';

angular.module('todoListApp')
.controller('mainCtrl',function($scope){
  $scope.addTodo = function(){
    var todo = {name: "This is a new todo"};
    $scope.todos.unshift(todo);
    };
    $scope.todos=[
      {"name":"pouczyć się z Treehouse"},
      {"name":"Wyjść z dziećmi na spacer"},
      {"name":"dodać posty do Buffer"},
      {"name":"skończyć artykuł z Evernote"},
      {"name":"zobić zakupy"},
      {"name":"zrobić nowe zdjęcia"}
    ]
});
