angular.module('TMApp')
  .controller('ProjectCtrl', function($scope, apiService, projectService){

    //Request on project service
    projectService.getProjects()
      .then(function(res){
        //Bind $scope.projects with data from API
        $scope.projects = res.data;
      }, function(err){
        console.log(err);
      });
  });
