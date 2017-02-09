$( document ).ready(function() {

  var game = null;
  var current_roll_number = 0;
  var current_frame_number = 0;
  var currentFrame = null;

  $("h2#frame-display").text("Frame: " + current_frame_number.toString() );
  $("h2#roll-display").text("Roll: " + current_roll_number.toString());

  $("button#start-game").click(function(){
    game = new Game();
    current_roll_number = 1;
    current_frame_number = 1;
    updateStats();
  });

  $("button#reset").click(function(){
    current_roll_number = 0;
    current_frame_number = 0;
    game = null;
    updateStats();
  });



    $('form#entry').submit( function(e) {
          $.ajax({
            success: function () {
              roll = new Roll(parseInt($('input#roll-input').val()))
              if(currentFrame!=null){
                 frame = currentFrame
              }else {
                 frame = new Frame()

              }
              currentFrame = frame
              frame.addRoll(roll)
              current_roll_number += 1
              console.log(roll)
              console.log(frame)
              updateStats()
           }
       });
       e.preventDefault();
      });


function updateStats(){
  $("h2#frame-display").text("Frame: " + current_frame_number.toString() );
  $("h2#roll-display").text("Roll: " + current_roll_number.toString());

}

});
