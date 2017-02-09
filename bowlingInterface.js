$( document ).ready(function() {

  $('#show-scorecard').hide()
  $('#scorecard').hide()


  var game = null;
  var current_roll_number = 0;
  var current_frame_number = 0;
  var currentFrame = null;
  var currentGame = null;

  $("h2#frame-display").text("Frame: " + current_frame_number.toString() );
  $("h2#roll-display").text("Roll: " + current_roll_number.toString());

  $("button#start-game").click(function(){
    currentGame = new Game();
    console.log(currentGame)
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
              if(isOver()){
                $('form#entry').hide()
                $('button#show-scorecard').show()
              }else{
                roll = new Roll(parseInt($('input#roll-input').val()))
                currentFrame = checkFrame()
                currentFrame.addRoll(roll)
                current_roll_number += 1
                console.log(roll)
                console.log(currentFrame)
                console.log(currentGame)
                updateStats()
            }
           }
       });
       e.preventDefault();
      });


function updateStats(){
  $("h2#frame-display").text("Frame: " + current_frame_number.toString() );
  $("h2#roll-display").text("Roll: " + current_roll_number.toString());
}

function checkFrame(){
  if(currentFrame!=null&&currentFrame.rolls().length<2){
     return currentFrame
  }else if(currentFrame!=null&&currentFrame.rolls().length==2){
      currentGame.addFrame(currentFrame)
      current_frame_number+=1
      return new Frame()
  }else {
    current_frame_number+=1
     return new Frame()
  }
}

function isOver(){
  if(currentGame!=null&&currentGame.frames().length==10){
    return true
  }else{
    return false
  }
}


$("button#show-scorecard").click(function(){
  $('button#show-scorecard').hide()
  $('#scorecard').show()
});

});
