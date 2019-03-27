(function() {

   
    
    angular.module('myApp')
     
      .component('noticiaEdit', {
          bindings: {
            onChange: "&", 
         
          noticia: '<'
        },
        controller: ComponentController,
        template: `<div class="Noticias">       
        <input type="text" ng-model="$ctrl.noticia.titulo"></input>
        <input type="text" ng-model="$ctrl.noticia.imagem"></input>
        <input type="text" ng-model="$ctrl.noticia.mensagem"></input>
        <button ng-click="$ctrl.salvar()">Salvar</button>  
        
                          
        
    </div>`
      });
  
  
    function ComponentController() {
      this.salvar= function(){
        
        this.onChange({
          noticia: this.noticia
        })
      }       
    }
  
  })();