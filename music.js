function select(selector){
   return document.querySelector(selector);
};

var animate = "round_img 10s linear infinite";
var isPlaying = false;
const play = () => {
   select("audio").play();
   select("#play_pause").classList.remove("fa-play");
   select("#play_pause").classList.add("fa-pause");
   select("#play_pause").setAttribute("title", "pause");
   select(".imageDiv").style.animation = animate;
   isPlaying = true;
};
const pause = () => {
   select("audio").pause();
   select("#play_pause").classList.remove("fa-pause");
   select("#play_pause").classList.add("fa-play");
   select("#play_pause").setAttribute("title", "play");
   select(".imageDiv").style.animation = "";
   isPlaying = false;
};
select("#play_pause").addEventListener("click", () => {
   !isPlaying ? play() : pause();
});

const allMusic = [
   music1 = {
      title: "Music 1",
      artist: "Someone1",
      musicSrc: "music/music1.mp3",
      imageSrc: "images/music1.jpg",
   },
   music2 = {
      title: "Music 2",
      artist: "Someone2",
      musicSrc: "music/music2.mp3",
      imageSrc: "images/music2.jpg",
   },
   music3 = {
      title: "Music 3",
      artist: "Someone3",
      musicSrc: "music/music3.mp3",
      imageSrc: "images/music3.jpg",
   },
   music4 = {
      title: "Music 4",
      artist: "Someone4",
      musicSrc: "music/music4.mp3",
      imageSrc: "images/music4.jpg",
   },
   music5 = {
      title: "Music 5",
      artist: "Someone5",
      musicSrc: "music/music5.mp3",
      imageSrc: "images/music5.jpg",
   },
   music6 = {
      title: "Music 6",
      artist: "Someone6",
      musicSrc: "music/music6.mp3",
      imageSrc: "images/music6.jpg",
   },
   music7 = {
      title: "Music 7",
      artist: "Someone7",
      musicSrc: "music/music7.mp3",
      imageSrc: "images/music7.jpg",
   },
   music8 = {
      title: "Music 8",
      artist: "Someone8",
      musicSrc: "music/music8.mp3",
      imageSrc: "images/music8.jpg",
   },
   music9 = {
      title: "Music 9",
      artist: "Someone9",
      musicSrc: "music/music9.mp3",
      imageSrc: "images/music9.jpg",
   },
   music10 = {
      title: "Music 10",
      artist: "Someone10",
      musicSrc: "music/music10.mp3",
      imageSrc: "images/music10.jpg",
   },
];

var i = 0;
var responsive = window.matchMedia("(max-width: 770px)");
while(i < allMusic.length){
   var li = document.createElement("li");
   li.setAttribute("onclick", "playSong(this)");
   li.setAttribute("value", `${i}`);
   if(!responsive.matches){
      select("#list_ul").appendChild(li).innerHTML = allMusic[i].title;
   }else{
      select("#list_ul_res").appendChild(li).innerHTML = allMusic[i].title;
   }
   i += 1;
};

const changeMusic = (arrayIndex) => {
   select("img").setAttribute("src", allMusic[arrayIndex].imageSrc);
   select("audio").setAttribute("src", allMusic[arrayIndex].musicSrc);
   select("#title").innerHTML = allMusic[arrayIndex].title;
   select("#indexInput").setAttribute("value", arrayIndex);
   select("#artist").innerHTML = allMusic[arrayIndex].artist;
};
/* // by defult first music will play */ 
changeMusic(0);
   
const playSong = (selectedMusic) => {
   var index = selectedMusic.value;
   changeMusic(index);
   play();
};
select(".menuBar").addEventListener("click", (event) => {
   event.stopPropagation();
   select(".responsive").style.transform = "scaleY(1)";
});
window.onclick = () => {
   select(".responsive").style.transform = "scaleY(0)";
};
select("#prev").addEventListener("click", () => {
   var index = Number(select("#indexInput").value);
   index --;
   if(index < 0){
      index = 9;
      console.log(index);
      changeMusic(index);
      play();
   }else{
      console.log(index);
      changeMusic(index);
      play();
   }
});
select("#next").addEventListener("click", () => {
   var index = Number(select("#indexInput").value);
   index ++;
   if(index == allMusic.length){
      index = 0;
      console.log(index);
      changeMusic(index);
      play();
   }else{
      console.log(index);
      changeMusic(index);
      play();
   }
});
console.log(allMusic.length);