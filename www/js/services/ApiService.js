angular.module('TMApp')
    .factory('apiService', function() {
        return {
            url: 'http://task-manager-puc.herokuapp.com'
        }
    });