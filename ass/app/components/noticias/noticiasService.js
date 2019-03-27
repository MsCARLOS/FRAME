(function() {

  angular.module('myApp')
  .service('NoticiasService', ['$resource', "$state", function($resource, $state) {
    let Resource = $resource('http://104.248.235.252:3003/api/noticias/:id',
                             {id:'@id'},
			    {update:{method:'PUT'}});
    this.noticias = Resource.query();
    this.getNoticias = () => {
      return this.noticias;
    };
    this.criarNovo = (noticia) => {
      let newNoticia = new Resource()
      newNoticia.titulo = noticia.titulo
      newNoticia.mensagem = noticia.mensagem
      newNoticia.imagem = noticia.imagem
      newNoticia.$save()
      this.noticias.push(newNoticia)
      $state.go("home")

    };
  }])
})();