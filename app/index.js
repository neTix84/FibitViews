import document from "document";

var scoreA = 0;
var scoreB = 0;

var btnScoreA = document.getElementById("scoreA");
btnScoreA.onactivate = function(evt) {
      scoreA++;
      btnScoreA.text = scoreA;
}

var btnScoreB = document.getElementById("scoreB");
btnScoreB.onactivate = function(evt) {
      scoreB++;
      btnScoreB.text = scoreB;
}

var btnStart = document.getElementById("start");
btnStart.onactivate = function(evt) {
    console.log("Start Pressed");
    let viewConfig = document.getElementById("config");
    let viewMain = document.getElementById("main");

    viewConfig.style.display = "none";
    viewMain.style.display = "inline";
}


//Switch Views
setTimeout(function() {
  let viewTitle = document.getElementById("title");
  let viewConfig = document.getElementById("config");
  
  viewTitle.style.display = "none";
  viewConfig.style.display = "inline";

  console.log("View Switched");
},3000);



