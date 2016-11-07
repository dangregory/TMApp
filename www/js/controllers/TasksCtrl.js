angular.module('TMApp')
    .controller('TasksCtrl', function($scope, $state, $filter, apiService, taskService) {

        //Request on task service
        taskService.getTasks()
            .then(function(res) {
                //Bind $scope.tasks with data from API
                $scope.auxTasks = res.data;
                $scope.tasks = $scope.auxTasks;

                console.log(res.data);
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

        $scope.filterTasks = function(status){
          $scope.tasks = $filter('filter')($scope.auxTasks, { status: status });
          console.log($scope.tasks);
        }
    });
