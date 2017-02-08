$( document ).ready(function() {

  var game = null;

  $("button#start-game").click(function(){
    $("h2#frame-display").text("Frame: 1");
    $("h2#roll-display").text("Roll: 1");
    game = new Game();
  });

  $("button#reset").click(function(){
    $("h2#frame-display").text("Frame: 0");
    $("h2#roll-display").text("Roll: 0");
    game = null;
  });


});
