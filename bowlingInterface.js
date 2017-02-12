$( document ).ready(function() {

  $('#show-scorecard').hide()
  $('#scorecard').hide()
  $('#the-form').hide()


  var game = null;
  var current_roll_number = 0;
  var current_frame_number = 0;
  var currentFrame = null;
  var currentGame = null;

  $("h2#frame-display").text("Frame: " + current_frame_number.toString() );
  $("h2#roll-display").text("Roll: " + current_roll_number.toString());

  $("button#start-game").click(function(){
    $('#the-form').show()
    currentGame = new Game();
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
              // if(isOver()){
              //   $('form#entry').hide()
              //   $('#whole-main-box').hide()
              //   $('button#show-scorecard').show()
              // }else{
                roll = new Roll(parseInt($('input#roll-input').val()))
                currentFrame = checkFrame()
                currentFrame.addRoll(roll)
                current_roll_number += 1
                updateStats()
            // }
              if(isOver()){
                $('form#entry').hide()
                $('#whole-main-box').hide()
                $('button#show-scorecard').show()
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
      if(currentGame.frames().length==9 && currentFrame.isStrike()){
        return currentFrame
      }else{
        currentGame.addFrame(currentFrame)
        current_frame_number+=1
        return new Frame()
    }
  }else {
    if(currentFrame==0){
     return new Frame()
   }else{
     current_frame_number+=1
     return new Frame()
   }
 }
}

function isOver(){
  return (currentGame!=null&&currentGame.frames().length==10)
}

$("button#show-scorecard").click(function(){
  $('button#show-scorecard').hide()
  fillInCard()
  $('#scorecard').show()
})


function fillInCard(){
  for(i=1; i<11; i++){
    var theFrame = currentGame.frames()[i-1]
    var theRoll = theFrame.rolls().shift()
    var pinsScored = String(theRoll.pins())
    var currentTotal = 0
    $('#myTable').append("<tr><td>" + String(i) + "</td><td>"+String(1)+"</td><td>"+ pinsScored+"</td><td>"+currentTotal+"</td></tr>")
    theRoll = theFrame.rolls().shift()
    pinsScored = String(theRoll.pins())
    $('#myTable').append("<tr><td>" + String(i) + "</td><td>"+String(2)+"</td><td>"+ pinsScored+"</td><td>"+currentTotal+"</td></tr>")
  }
}

});
