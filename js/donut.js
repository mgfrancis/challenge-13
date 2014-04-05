$(function(){
 	
 	function Donut(type,color,tasty){

		this.type = type;
		this.color = color;
		this.tasty = tasty;

		this.el = function(){
			return "<li>"+
					this.type+"<br>"+
					this.color+"<br>"+
					this.tasty+"<br>"+
					"</li>";
		};

		this.create = function(){
			$('#donut-list').append(this.el());
		};
	}


 	//user clicks create - requires code

 	$('#create').click(function(){

 		//get the values they typed in -requires code

 		//user types input - does not require code

 		var type = $('#type').val();
 		var color = $('#color').val();
 		var tasty = $('#tasty').val();

 		//create a new donut based on Donut-requires code

 		var donut = new Donut(type, color, tasty);

 		//append the donut into the ul

 		donut.create();
 	});

 });	