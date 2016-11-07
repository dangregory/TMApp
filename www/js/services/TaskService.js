angular.module('TMApp')
    .factory('taskService', function($http, apiService) {
        return {
            getTasks: function() {
                return $http.get(apiService.url + '/task/all');
            },

            addTask: function(taskData) {
                return $http.post(apiService.url + '/task/add', taskData);
            },

            getTask: function(taskId) {
                return $http.get(apiService.url + '/task/' + taskId);
            },

            deleteTask: function(taskId) {
                return $http.delete(apiService.url + '/task/' + taskId);
            }
        }
    });