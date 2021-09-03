
const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');



const songList = [
    {
        path: "bensound-cute.mp3",
        songName: "Cute",
    },
    {
        path: "bensound-happyrock.mp3",
        songName: "Happy Rock",
    },
    {
        path: "bensound-jazzyfrenchy.mp3",
        songName: "Jazzy Frenchy",
    },
    {
        path: "bensound-ukulele.mp3",
        songName: "Enjoyy"
    },

];

let song_playing = false;

//play song
function playSong() {
    song_playing = true;
    audio.play();
    playPause.classList.add('active');
    // to change icon on play and pause
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}
//pause song
function pauseSong() {
    song_playing = false;
    audio.pause();
    playPause.classList.remove('active');
    //to change icon on play and pause
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}
//to play or pause on click
playPause.addEventListener("click", () => (song_playing ? pauseSong() : playSong()));

//load song
function loadsong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;

}
//current song
let i = 0;



//previous song
function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadsong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong());

//next song
function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadsong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong());



