angular.module('TMApp')
    .controller('TaskCtrl', function($scope, $state, $stateParams, apiService, taskService, projectService) {
        projectService.getProjects()
          .then(function(res) {
              //Bind $scope.projects with data from API
              $scope.projects = res.data;
              console.log($scope.projects);
          }, function(err) {
              console.log(err);
          });

        taskService.getTask($stateParams.taskId).success(function(task) {
            $scope.task = task;
            console.log($scope.task);
        });

        $scope.deleteTask = function(id) {
            $scope.statusMsg = '';
            taskService.deleteTask(id).then(function() {
                $scope.statusMsg = 'Tarefa deletado!';
                $state.go('app.tasks');
                taskService.getTask($stateParams.taskId).success(function(task) {
                    $scope.task = task;
                    console.log($scope.task);
                });
            });
        }
    });
