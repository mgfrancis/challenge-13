$(function(){

  var Donut = {
    type: 'glazed',
    color: 'white',
    tasty: true,
    el: function() {
      return '<li>'+
                'type: '+this.type+'<br>'+
                'color: '+this.color+'<br>'+
                'tasty: '+this.tasty+
             '</li>';
    },
    create: function() {
      $('#donut-list').append(this.el());
    }
  };

  Donut.all = [];

  $('#create').click(function(){
    var type = $('#type').val();
    var color = $('#color').val();
    var tasty = $('#tasty').val();
    var newDonut = Object.create(Donut);
    newDonut.type = type;
    newDonut.color = color;
    newDonut.tasty = tasty;
    Donut.all.push(newDonut);
    //console.log(Donut.all);
    newDonut.create();
  });

});