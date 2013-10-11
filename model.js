function Model(){
	var id;
	var nome;
	
	this.inserir = function(id, nome){
		localStorage.setItem(id, nome);
             alert("Item adicionado.");
			 
		}
	this.ler = function(id, nome){
		var obj = localStorage.getItem(id, nome);
             if(obj != null) {
                 alert(obj)
             } else {
                 alert("O item procurado não existe.")
             }
             lista();
		}
		
	this.remover = function (id, nome){
			localStorage.removeItem(id, nome);
            alert("Item removido.");
		}
		
	this.limpar = function(){
                localStorage.clear();
                alert("localStorage foi esvaziada!");
		}
		
	this.lista = function() {
             objLista = "<table>";
             if (localStorage.length > 0) {
                for (i = 0; i < localStorage.length; i++) {
                   objLista += "<tr><td>" + localStorage.getItem(localStorage.key(i)) + "</td></tr>";
                }
             }
             objLista += "</table>";
             
             $("#divLista").html(objLista);
           }
	
	}