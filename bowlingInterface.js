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

  $("button#new-game").click(function(){
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

  $("button#show-scorecard").click(function(){
        $('button#show-scorecard').hide()
        fillInCard()
        $('#scorecard').show()
  })

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
  if(currentFrame&&currentFrame.rolls().length<2){
     return currentFrame
  }else if(currentFrame&&currentFrame.rolls().length==2){
      return newFrameOrFinalFrame()
  }else {
    return firstFrameorNewFrame(currentFrame)
 }
}

function firstFrameorNewFrame(currentFrame){
  if(currentFrame==null){
    return new Frame()
  }else{
    currentGame.addFrame(currentFrame)
    return new Frame()
  }
}

function newFrameOrFinalFrame(){
  if(currentGame.frames().length==9 && currentFrame.isStrike()){
    return currentFrame
  }else{
    currentGame.addFrame(currentFrame)
    return new Frame()
  }

}

function isOver(){
  return (currentGame!=null&&currentGame.frames().length==10)
}


function fillInCard(){
  totalsArray = currentGame.generateTotals()
  listFrames = currentGame.frames()
  for(i=1; i<11; i++){
    thisFrame = listFrames[i-1]
    $('#myTable').append("<tr><td>" + String(i) + "</td><td>"+String(1)+"</td><td>"+ String(thisFrame.rolls()[0].pins())+"</td><td>"+String(totalsArray[i-1][0])+"</td></tr>")
    $('#myTable').append("<tr><td>" + String(i) + "</td><td>"+String(2)+"</td><td>"+ String(thisFrame.rolls()[0].pins())+"</td><td>"+String(totalsArray[i-1][1])+"</td></tr>")
  }
}

});
