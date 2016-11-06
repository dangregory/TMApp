angular.module('TMApp')
    .factory('projectService', function($http, $rootScope, apiService) {
        return {
            getProjects: function() {
                return $http.get(apiService.url + '/project/all');
            },

            addProject: function(projectData) {
                return $http.post(apiService.url + '/project/add', projectData);
            },

            getProject: function(projectId) {
                return $http.get(apiService.url + '/project/' + projectId);
            },
        }
    });