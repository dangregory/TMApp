angular.module('TMApp')
    .controller('ProjectCtrl', function($scope, $stateParams, $state, apiService, projectService) {

        projectService.getProject($stateParams.projectId).success(function(projeto) {
            $scope.project = projeto;
        });

        $scope.deleteProject = function(id) {
            $scope.statusMsg = '';
            console.log(id);
            projectService.deleteProject(id).then(function() {
                $scope.statusMsg = 'Projeto deletado!';
                $state.go('app.projects');
                projectService.getProjects()
                    .then(function(res) {
                        //Bind $scope.projects with data from API
                        $scope.projects = res.data;
                    }, function(err) {
                        console.log(err);
                    });
            });
        }
    });