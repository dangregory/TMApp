angular.module('TMApp')
    .controller('TasksCtrl', function($scope, apiService, taskService, projectService) {
        //On enter view

        projectService.getProjects()
            .then(function(res) {
                //Bind $scope.projects with data from API
                $scope.projects = res.data;
            }, function(err) {
                console.log(err);
            });

        //Request on task service
        taskService.getTasks()
            .then(function(res) {
                //Bind $scope.tasks with data from API
                $scope.tasks = res.data;
            }, function(err) {
                console.log(err);
            });

        //New task
        $scope.taskData = {};
        $scope.statusMsg = '';
        $scope.addTask = function() {
            console.log($scope.taskData);
            /*taskService.addTask($scope.taskData)
                .then(function() {
                    $scope.statusMsg = 'Tarefa adicionado!';
                });*/
        }
    });