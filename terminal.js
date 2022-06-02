const stringArray = [
    "Fngi ~",
    "$Checking address...",
    "$Complete",
    "$Grabbing historical data...",
    "$Complete",
    "$Analysing current submission...",
    "$Complete",
    "$Checking hp rating...",
    "$Complete",
    "$Checking current social media score...",
    "$Complete",
    "$Analysing price trends...",
    "$Complete",
    "$Checking current BPR index...",
    "$Complete",
    "$Finalizing information...",
    "$Complete",
    "Your information is completed!"
  ];
var loading = false;
$(document).ready(function(){
  $(".test").click(function(){
    if(loading == true){
      alert("Process busy...");
      return;
    }
    if($(".input-field").val() != ""){
      loading = true;
      var text = "Starting Fngi session: "+getDate();
      $(".terminal").append("<p>"+text+"</p>");
      $(".terminal").append("<h1>  </h1>");
      load();
    }
    else{
      alert("Please Enter your information.");
      return;
    }
  });
});
const timer = ms => new Promise(res => setTimeout(res, ms))
async function load(){
  for(let i = 0; i< stringArray.length; i++){
      var random = getRndInteger(5,10);
      await timer(1000*random);
      $(".terminal").append("<p>"+stringArray[i]+"</p>");
  }
  $(".input-field").val("");
  loading = false;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getDate(){
  var now = new Date();
  var curr_hour = now.getHours()<10? '0'+now.getHours():now.getHours();
  var curr_min = now.getMinutes()<10? '0'+now.getMinutes():now.getMinutes();
  var curr_second = now.getSeconds();
  var time24 =  curr_hour + ":" + curr_min;
  var curr_month = (now.getMonth()+1) <10?'0'+(now.getMonth()+1):now.getMonth()+1;
  var curr_date = now.getDate()<10? '0'+now.getDate():now.getDate();
  var pretty = [
    curr_month,
    '/',
    curr_date,
    '/',
    now.getFullYear(),
    ' ',
    curr_hour,
    ':',
    curr_min,
    ':',
    curr_second,
  ].join('');
  return pretty.toString();
}