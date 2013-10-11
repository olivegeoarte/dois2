function Controler(){
	this.inserir = function (){
		model.inserir($("#txt1").val(), $("#txt2").val(), $("#txt3").val());
		$("#txt1").val("");
		$("#txt2").val("");
		$("#txt2").val("");
		model.selecionaTodos();
		}
	this.ler = function (){
		model.selecionaTodos();
		}
	this.remover = function (){
		model.remover($("#txt1").val());
		model.selecionaTodos();
		}
	this.limpar = function (){
		model.limpar();
		model.selecionaTodos();
		}
	
	}