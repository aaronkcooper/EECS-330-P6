// Create your global variables below:
var tracklist = ["Airbag", "Paranoid Android", "Subterranean Homesick Alien", "Exit Music (For a Film)", "Let Down", " Karma Police", "Fitter Happier", "Electioneering", "Climbing Up the Walls", "No Surprises"];
var volLevels = [];
var vol = 2;
var time = 0;
var track = 0;
function init() {
	// Your code goes here
  var i;
  for(i=0;i<6;i++){
    volLevels[i]=document.getElementById('vl' + i);
    if(i <= 2){
      document.getElementById('vl' + i).style.backgroundColor = "blue";
    }
  }
};

function volUp() {
	// Your code goes here
  if(vol == 5){

  }
  else{
    vol++;
    document.getElementById('vl' + vol).style.backgroundColor = "blue";
  }
}

function volDown() {
	// Your code goes here
  if(vol == -1){

  }
  else{
    document.getElementById('vl' + vol).style.backgroundColor = "white";
    vol--;
  }
}

function switchPlay() {
	// Your code goes here
  if(document.getElementById('play-pause').innerHTML == "play_arrow"){
    document.getElementById('play-pause').innerHTML = "pause";
   timer = setInterval(function()
   {time++;
   document.getElementById('bar').value = "" + time;
   let curr_time = secondsToMs(time);
   document.getElementById('time').innerHTML = '' + curr_time;
   if(time==180){
     nextSong();
   }}, 1000)
  }
  else{
    document.getElementById('play-pause').innerHTML = "play_arrow";
    clearInterval(timer);
  }

}

function nextSong() {
	// Your code goes here
  time = 0;
  document.getElementById('time').innerHTML = '0:00';
  if(track == 9){
    track = -1;
  }
  track++;
  document.getElementById('player-song-name').innerHTML = tracklist[track]
}

function prevSong() {
	// Your code goes here
  time = 0;
  document.getElementById('time').innerHTML = '0:00';
  if(track == 0){
    track = 10;
  }
  track--;
  document.getElementById('player-song-name').innerHTML = tracklist[track]
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}
function update(value) {
  time = value;
  let seconds = secondsToMs(value);
  document.getElementById('time').innerHTML = '' + seconds;
}
init();
