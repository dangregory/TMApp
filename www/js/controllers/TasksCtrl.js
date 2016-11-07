angular.module('TMApp')
    .controller('TasksCtrl', function($scope, $state, apiService, taskService, projectService) {
        //On enter view

        projectService.getProjects()
            .then(function(res) {
                //Bind $scope.projects with data from API
                $scope.projects = res.data;
                console.log($scope.projects);
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
            taskService.addTask($scope.taskData)
                .then(function() {
                    $scope.statusMsg = 'Tarefa adicionado!';
                });
        }

        $scope.addTaskScreen = function() {
            $state.go('app.new-task');
        }

        //Refresh
        $scope.doRefresh = function() {
            taskService.getTasks()
                .then(function(res) {
                    $scope.tasks = res.data;
                    $scope.$broadcast('scroll.refreshComplete');
                }, function(err) {
                    console.log(err);
                });
        };
    });