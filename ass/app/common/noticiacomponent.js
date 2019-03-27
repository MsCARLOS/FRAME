(function() {

   
    
    angular.module('myApp')
     
      .component('noticia', {
          bindings: {
         
          noticia: '<'
        },
        controller: ComponentController,
        template: `<div class="Noticias">
        <h1>{{$ctrl.noticia.titulo}}</h1>
        <img src={{$ctrl.noticia.imagem}}>
        <p>{{$ctrl.noticia.mensagem}}</p>
        <p>{{$ctrl.noticia.data}}</p>                    
        
    </div>`
      });
  
  
    function ComponentController($log, $window, $timeout) {
       
    }
  
  })();