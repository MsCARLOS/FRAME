
(function() {

    angular.module('myApp')
    .controller('novaNoticiaController', ['$scope', 'NoticiasService', function($scope, NoticiasService) {
      $scope.salvar = (noticia) => {

        return NoticiasService.criarNovo(noticia);

      }
      $scope.noticia = {}
    }]);
  })();