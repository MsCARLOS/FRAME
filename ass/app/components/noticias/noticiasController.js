
(function() {

  angular.module('myApp')
  .controller('NoticiasController', ['$scope', '$state', 'NoticiasService', function($scope, $state, NoticiasService) {
    $scope.getNoticias = () => {
      return NoticiasService.getNoticias();
    }
    $scope.novaNoticia = () => {
      console.log("criando nova noticia")
      $state.go("NovaNoticia")
    }
  }]);

})();