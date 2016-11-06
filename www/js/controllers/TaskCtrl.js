angular.module('TMApp')
    .controller('TaskCtrl', function($scope, $stateParams, apiService, taskService) {

        console.log($stateParams.taskId);
        taskService.getTask($stateParams.taskId).success(function(task) {
            $scope.task = task;
            console.log($scope.task);
        });
    });