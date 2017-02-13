$( document ).ready(function() {

  $('#show-scorecard').hide()
  $('#scorecard').hide()
  $('#the-form').hide()

  var game = null;
  var currentFrame = null;
  var currentGame = null;


  $("button#start-game").click(function(){
    $('#the-form').show()
    currentGame = new Game();
    updateFrameAndRoll();
  });

  $("button#reset").click(function(){
    game = null;
    updateFrameAndRoll();
  });

    $('form#entry').submit( function(e) {
          $.ajax({
            success: function () {

                newRoll = new Roll(parseInt($('input#roll-input').val()))
                currentFrame = checkFrame()
                currentFrame.addRoll(newRoll)
                updateFrameAndRoll()

                if(isOver()){ finalView()}
           }
       });
       e.preventDefault();
      });


function updateFrameAndRoll(){

  currentFrameNumber = currentGame.frames().length+1

  if(currentFrame == null){
    currentRollNumber=1
  }else{
    currentRollNumber = currentFrame.rolls().length
  }

  $("h2#frame-display").text("Frame: " + currentFrameNumber.toString() );
  $("h2#roll-display").text("Roll: " + currentRollNumber.toString());
}

function finalView(){
  $('form#entry').hide()
  $('#whole-main-box').hide()
  $('button#show-scorecard').show()
  $('button#new-game').show()
}


function checkFrame(){

  if(currentFrame!=null&&currentFrame.rolls().length<2){

     return currentFrame

  }else if(currentFrame!=null&&currentFrame.rolls().length==2){

      return finalRollCase()

  }else {

    if(currentFrame==null){
      return new Frame()
    }else{
      console.log('add frame')
      currentGame.addFrame(currentFrame)
      return new Frame()
    }

 }
}

function finalRollCase(){
  if(currentGame.frames().length==9 && currentFrame.isStrike()){
    return currentFrame
  }else{
    console.log('add frame')
    currentGame.addFrame(currentFrame)
    return new Frame()
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
  totalsArray = currentGame.generateTotals()
  console.log(currentGame)
  listFrames = currentGame.frames()
  console.log(listFrames)
  for(i=1; i<11; i++){
    theTotals = totalsArray[i-1]
    thisFrame = listFrames[i-1]
    theRolls = thisFrame.rolls()
    roll1pins = theRolls[0].pins()
    roll2pins = theRolls[1].pins()
    $('#myTable').append("<tr><td>" + String(i) + "</td><td>"+String(1)+"</td><td>"+ String(roll1pins)+"</td><td>"+String(theTotals[0])+"</td></tr>")
    $('#myTable').append("<tr><td>" + String(i) + "</td><td>"+String(2)+"</td><td>"+ String(roll2pins)+"</td><td>"+String(theTotals[1])+"</td></tr>")
  }
}

});
