angular.module('TMApp')
    .controller('ProjectsCtrl', function($scope, $stateParams, $state, apiService, projectService) {
        //On enter view

        //Request on project service
        projectService.getProjects()
            .then(function(res) {
                //Bind $scope.projects with data from API
                $scope.projects = res.data;
            }, function(err) {
                console.log(err);
            });

        //Refresh
        $scope.doRefresh = function() {
            projectService.getProjects()
                .then(function(res) {
                    $scope.projects = res.data;
                    $scope.$broadcast('scroll.refreshComplete');
                }, function(err) {
                    console.log(err);
                });
        };

        //New project
        $scope.projectData = {};
        $scope.statusMsg = '';

        $scope.addProject = function() {
            projectService.addProject($scope.projectData)
                .then(function() {
                    $scope.statusMsg = 'Projeto adicionado!';
                    $state.go('app.projects');
                    projectService.getProjects()
                        .then(function(res) {
                            //Bind $scope.projects with data from API
                            $scope.projects = res.data;
                            $scope.projectData = {};
                        }, function(err) {
                            console.log(err);
                        });
                });
        }

        $scope.addProjectScreen = function() {
            $state.go('app.new-project');
        }
    });
