angular.module('TMApp')
    .controller('ProjectCtrl', function($scope, $stateParams, apiService, projectService) {

        projectService.getProject($stateParams.projectId).success(function(projeto) {
            $scope.project = projeto;
        });
    });