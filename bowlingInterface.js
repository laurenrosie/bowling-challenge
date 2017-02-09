$( document ).ready(function() {

  var game = null;
  var current_roll = 0;
  var current_frame = 0;


  $("h2#frame-display").text("Frame: " + current_frame.toString() );
  $("h2#roll-display").text("Roll: " + current_roll.toString());

  $("button#start-game").click(function(){
    game = new Game();
    current_roll = 1;
    current_frame = 1;
    updateStats();
  });

  $("button#reset").click(function(){
    current_roll = 0;
    current_frame = 0;
    game = null;
    updateStats();
  });



    $('form#entry').submit( function(e) {
          $.ajax({
           data: $("input#roll-input").val(),
           success: function (data) {
             roll = new Roll(data)
             frame = new Frame()
             current_roll += 1
             updateStats()
           }
       });
       e.preventDefault();


      });

  // $("form#entry").submit(function(pins){
  //   roll = new(pins)
  //   frame = new Frame()
  //   current_roll += 1
  //   updateStats()
  // });

function updateStats(){
  $("h2#frame-display").text("Frame: " + current_frame.toString() );
  $("h2#roll-display").text("Roll: " + current_roll.toString());

}

});
