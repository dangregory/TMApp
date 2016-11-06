angular.module('TMApp')
  .factory('projectService', function($http, apiService){
    return {
      getProjects: function(){
        return $http.get(apiService.url + '/project/all');
      },

      addProject: function(projectData){
        return $http.post(apiService.url + '/project/add', projectData);
      }
    }
  });
