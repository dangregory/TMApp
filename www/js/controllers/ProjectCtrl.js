angular.module('TMApp')
  .controller('ProjectCtrl', function($scope, apiService, projectService){
    //On enter view
    
    //Request on project service
    projectService.getProjects()
      .then(function(res){
        //Bind $scope.projects with data from API
        $scope.projects = res.data;
      }, function(err){
        console.log(err);
      });

    //New project
    $scope.projectData = {};
    $scope.statusMsg = '';
    $scope.addProject = function(){
      projectService.addProject($scope.projectData)
        .then(function(){
          $scope.statusMsg = 'Projeto adicionado!';
        });
    }
  });
