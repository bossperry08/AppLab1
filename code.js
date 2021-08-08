//Variable declaration (before the main part)
var errornotif1 = "Sorry, you can't click here. Please click in the answer buttons";
var errornotif2 = "Invalid result. Please type your result again.";
//startscreen screen
playSound("assets/category_achievements/puzzle_game_achievement_big_03.mp3");
onEvent("button1","click", function(){
  setScreen("instructionScreen");
});
onEvent("button2","click", function(){
  setScreen("question1");
});
//question1 screen
if("button3"||"button4" || "button5","click"){
  onEvent("button3", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label8","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button39","click",function(){
      setScreen("question2");
  });
});
  onEvent("button4", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label8","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button39","click",function(){
      setScreen("question2");
  });
});
  onEvent("button5", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label8","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button39","click",function(){
      setScreen("question2");
  });
});
}
else {
  console.log(errornotif1);
}
//question2 screen
if("button6"||"button7" || "button8","click"){
  onEvent("button6", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label9","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button40","click",function(){
      setScreen("question3");
  });
});
  onEvent("button7", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label9","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button40","click",function(){
      setScreen("question3");
  });
});
  onEvent("button8", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label9","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button40","click",function(){
      setScreen("question3");
  });
});
}
else {
  console.log(errornotif1);
}
//question3 screen
if("button11"||"button12" || "button13","click"){
  onEvent("button11", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label10","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button41","click",function(){
      setScreen("question4");
  });
});
  onEvent("button12", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label10","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button41","click",function(){
      setScreen("question4");
  });
});
  onEvent("button13", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label10","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button41","click",function(){
      setScreen("question4");
  });
});
}
else {
  console.log(errornotif1);
}
//question4 screen
if("button15"||"button16" || "button17","click"){
  onEvent("button15", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label11","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button42","click",function(){
      setScreen("question5");
  });
});
  onEvent("button16", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label11","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button42","click",function(){
      setScreen("question5");
  });
});
  onEvent("button17", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label11","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button42","click",function(){
      setScreen("question5");
  });
});
}
else {
  console.log(errornotif1);
}
//question5 screen
if("button19"||"button20" || "button21","click"){
  onEvent("button19", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label12","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button43","click",function(){
      setScreen("question6");
  });
});
  onEvent("button20", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label12","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button43","click",function(){
      setScreen("question6");
  });
});
  onEvent("button21", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label12","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button43","click",function(){
      setScreen("question6");
  });
});
}
else {
  console.log(errornotif1);
}
//question6 screen
if("button23"||"button24" || "button25","click"){
  onEvent("button23", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label13","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button44","click",function(){
      setScreen("question7");
  });
});
  onEvent("button24", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label13","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button44","click",function(){
      setScreen("question7");
  });
});
  onEvent("button25", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label13","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button44","click",function(){
      setScreen("question7");
  });
});
}
else {
  console.log(errornotif1);
}
//question7 screen
if("button26"||"button27" || "button28","click"){
  onEvent("button26", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label14","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button45","click",function(){
      setScreen("question8");
  });
});
  onEvent("button27", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label14","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button45","click",function(){
      setScreen("question8");
  });
});
  onEvent("button28", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label14","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button45","click",function(){
      setScreen("question8");
  });
});
}
else {
  console.log(errornotif1);
}
//question8 screen
if("button29"||"button30" || "button31","click"){
  onEvent("button29", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label15","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button46","click",function(){
      setScreen("question9");
  });
});
  onEvent("button30", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label15","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button46","click",function(){
      setScreen("question9");
  });
});
  onEvent("button31", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label15","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button46","click",function(){
      setScreen("question9");
  });
});
}
else {
  console.log(errornotif1);
}
//question9 screen
if("button33"||"button34" || "button35","click"){
  onEvent("button33", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label26","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button47","click",function(){
      setScreen("question10");
  });
});
  onEvent("button34", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label26","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button47","click",function(){
      setScreen("question10");
  });
});
  onEvent("button35", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label26","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button47","click",function(){
      setScreen("question10");
  });
});
}
else {
  console.log(errornotif1);
}
//question10 screen
if("button36"||"button37" || "button38","click"){
  onEvent("button36", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label27","text", "That's 20pts. Please note it down, then click Next to continue.");
    onEvent("button48","click",function(){
      setScreen("resulttimeScreen");
  });
});
  onEvent("button37", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label27","text", "That's 10pts. Please note it down, then click Next to continue.");
    onEvent("button48","click",function(){
      setScreen("resulttimeScreen");
  });
});
  onEvent("button38", "click", function(){
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3");
    setProperty("label27","text", "That's 30pts. Please note it down, then click Next to continue.");
    onEvent("button48","click",function(){
      setScreen("resulttimeScreen");
  });
});
}
else {
  console.log(errornotif1);
}
//resulttimeScreen Screen
playSound("assets/category_achievements/peaceful_win_6.mp3");
  //Bắt đầu hàm rc
  function rc(){
    //Bắt đầu hàm rc2
     function rc2(){
       //Bắt đầu hàm rc3
       function rc3(){
    onEvent("button32", "click", function()
{
  var result = promptNum("Please type in your result:");
    switch (result){
    case 100:
    case 110:
    case 120:
    case 130:
    case 140:
    case 150:
    case 160:
    case 170:
      setScreen("DetectiveScreen");
      break;
    case 180:
    case 190:
    case 200:
    case 210:
    case 220:
    case 230:
    case 240:
      setScreen("InvestigatorScreen");
      break;
    case 250:
    case 260:
    case 270:
    case 280:
    case 290:
    case 300:
      setScreen("DataAnalyserScreen");
      break;
    default:
      console.log(errornotif2);
      setScreen("resulttimeScreen");
      setProperty("label17", "text", "Sorry, you can't continue playing this game. Please cancel and restart the game again.");
  }});
  }//Kết thúc hàm rc3
  onEvent("button32", "click", function()
{
  var result = promptNum("Please type in your result:");
    switch (result){
    case 100:
    case 110:
    case 120:
    case 130:
    case 140:
    case 150:
    case 160:
    case 170:
      setScreen("DetectiveScreen");
      break;
    case 180:
    case 190:
    case 200:
    case 210:
    case 220:
    case 230:
    case 240:
      setScreen("InvestigatorScreen");
      break;
    case 250:
    case 260:
    case 270:
    case 280:
    case 290:
    case 300:
      setScreen("DataAnalyserScreen");
      break;
    default:
      console.log(errornotif2);
      setScreen("resulttimeScreen");
      setProperty("label17", "text", errornotif2);
      rc3();
  }});
  } //Kết thúc hàm rc2
    onEvent("button32", "click", function()
{
  var result = promptNum("Please type in your result:");
    switch (result){
    case 100:
    case 110:
    case 120:
    case 130:
    case 140:
    case 150:
    case 160:
    case 170:
      setScreen("DetectiveScreen");
      break;
    case 180:
    case 190:
    case 200:
    case 210:
    case 220:
    case 230:
    case 240:
      setScreen("InvestigatorScreen");
      break;
    case 250:
    case 260:
    case 270:
    case 280:
    case 290:
    case 300:
      setScreen("DataAnalyserScreen");
      break;
    default:
      console.log(errornotif2);
      setScreen("resulttimeScreen");
      setProperty("label17", "text", errornotif2);
      rc2();
  }});
  } //Kết thúc hàm rc
onEvent("button32", "click", function()
{
  var result = promptNum("Please type in your result:");
  switch (result){
    case 100:
    case 110:
    case 120:
    case 130:
    case 140:
    case 150:
    case 160:
    case 170:
      setScreen("DetectiveScreen");
      break;
    case 180:
    case 190:
    case 200:
    case 210:
    case 220:
    case 230:
    case 240:
      setScreen("InvestigatorScreen");
      break;
    case 250:
    case 260:
    case 270:
    case 280:
    case 290:
    case 300:
      setScreen("DataAnalyserScreen");
      break;
    default:
      console.log(errornotif2);
      setScreen("resulttimeScreen");
      setProperty("label17", "text", errornotif2);
      rc();
  }
});
//Ba cái screen còn lại không có gì để làm hết (đúng hơn là làm không được)







