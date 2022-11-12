let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/Midnight.png',
        name : 'Labyrinth',
        artist : 'Taylor Swift',
        music : 'music/Labyrinth-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Vigilante Shit',
        artist : 'Taylor Swift',
        music : 'music/VigilanteShit-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Question',
        artist : 'Taylor Swift',
        music : 'music/Question-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Midnight Rain',
        artist : 'Taylor Swift',
        music : 'music/MidnightRain-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Bejeweled',
        artist : 'Taylor Swift',
        music : 'music/Bejeweled-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Anti-Hero',
        artist : 'Taylor Swift',
        music : 'music/Anti-Hero-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Lavender Haze',
        artist : 'Taylor Swift',
        music : 'music/LavenderHaze-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Maroon',
        artist : 'Taylor Swift',
        music : 'music/Maroon-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'Snow On The Beach',
        artist : 'Taylor Swift',
        music : 'music/SnowOnTheBeach-TaylorSwift.mp3'
    },
    {
        img : 'images/Midnight.png',
        name : 'You\'re On Your Own, Kid',
        artist : 'Taylor Swift',
        music : 'music/YoureOnYourOwn_ Kid-TaylorSwift.mp3'
    },
    {
        img: 'images/Passenger.jpg',
        name: 'Let Her Go',
        artist: 'Passenger',
        music: 'music/LetHerGo.mp3'
    },
    {
        img : 'images/Multiply.jpg',
        name : 'Photograph',
        artist : 'Ed Sheeran',
        music : 'music/Photograph.mp3'
    },
    {
        img : 'images/1D.jpg',
        name : 'Night Changes',
        artist : 'One Direction',
        music : 'music/NightChanges.mp3'
    },
    {
        img : 'images/Taylor.jpg',
        name : 'We Are Never Ever Getting Back Together (Taylor\'s version)',
        artist : 'Taylor Swift',
        music : 'music/WeAreNeverEverGettingBackTogether.mp3'
    },
    {
        img: 'images/Adele-Hello.jpg',
        name: 'Hello',
        artist: 'Adele',
        music: 'music/Hello-Adele.mp3',
    },
    {
        img : 'images/Multiply.jpg',
        name : 'Thinking Out Loud',
        artist : 'Ed Sheeran',
        music : 'music/ThinkingOutLoud.mp3'
    },
    {
        img : 'images/Flashlight.jpg',
        name : 'Flashlight',
        artist : 'Jessie J',
        music : 'music/Flashlight.mp3'
    },
    {
        img : 'images/1989.png',
        name : 'Style',
        artist : 'Taylor Swift',
        music : 'music/Style.mp3'
    },
    {
        img : 'images/PinkSweat$.jpg',
        name : 'At My Worst',
        artist : 'Pink Sweat$',
        music : 'music/AtMyWorst.mp3'
    },
    {
        img : 'images/Divide.jpg',
        name : 'Shape Of You',
        artist : 'Ed Sheeran',
        music : 'music/ShapeOfYou.mp3'
    },
    {
        img: 'images/Adele-21.jpg',
        name: 'Someone Like You',
        artist: 'Adele',
        music: 'music/SomeoneLikeYou.mp3',
    },
    {
        img : 'images/Taylor.jpg',
        name : 'Everything Has Changed',
        artist : 'Taylor Swift, Ed Sheeran',
        music : 'music/EverythingHasChanged.mp3'
    },
    {
        img : 'images/1D.jpg',
        name : 'One Thing',
        artist : 'One Direction',
        music : 'music/OneThing.mp3'
    },
    {
        img : 'images/Perfect_1d.jpg',
        name : 'Perfect',
        artist : 'One Direction',
        music : 'music/Perfect-1d.mp3'
    },
    {
        img : 'images/BangKhuang.jpg',
        name : 'Bang Khuang',
        artist : 'Justa Tee',
        music : 'music/BangKhuang.mp3'
    },
    {
        img : 'images/TheWeeknd.jpg',
        name : 'Blinding Lights',
        artist : 'The Weeknd',
        music : 'music/BlindingLights.mp3'
    },
    {
        img : 'images/TeenageDream.jpg',
        name : 'Teenage Dream',
        artist : 'Katy Perry',
        music : 'music/TeenageDream.mp3'
    },
    {
        img : 'images/Divide.jpg',
        name : 'Perfect',
        artist : 'Ed Sheeran',
        music : 'music/Perfect-Ed.mp3'
    },
    {
        img : 'images/TheWeeknd-3.jpg',
        name : 'Die For You',
        artist : 'The Weeknd',
        music : 'music/DieForYou.mp3'
    },
    {
        img: 'images/Adele-21.jpg',
        name: 'Rolling In The Deep',
        artist: 'Adele',
        music: 'music/RollingInTheDeep.mp3',
    },
    {
        img : 'images/TheWeeknd-1.jpg',
        name : 'Save Your Tears',
        artist : 'The Weeknd',
        music : 'music/SaveYourTears.mp3'
    },
    {
        img : 'images/2AM.jpg',
        name : '2AM',
        artist : 'Justa Tee, Big Daddy',
        music : 'music/2AM.mp3'
    },
    {
        img : 'images/ChuyenDoiTa.jpg',
        name : 'Chuyen Doi Ta',
        artist : 'Emcee L (Da LAB) ft Muộii',
        music : 'music/ChuyenDoiTa.mp3'
    },
    {
        img : 'images/DaLoYeuEmNhieu.jpg',
        name : 'Da Lo Yeu Em Nhieu',
        artist : 'Justa Tee',
        music : 'music/DaLoYeuEmNhieu.mp3'
    },
    {
        img : 'images/TheWeeknd-2.jpg',
        name : 'Out Of Time',
        artist : 'The Weeknd',
        music : 'music/OutOfTime.mp3'
    },
    {
        img : 'images/JustaTee.jpg',
        name : 'Crying Over You',
        artist : 'Justa Tee',
        music : 'music/CryingOverYou.mp3'
    },
    {
        img : 'images/TheOneThatGotAway.jpg',
        name : 'The One That Got Away',
        artist : 'Katy Perry',
        music : 'music/TheOneThatGotAway.mp3'
    },
    {
        img : 'images/TaylorFearless.jpg',
        name : 'Love Story',
        artist : 'Taylor Swift',
        music : 'music/LoveStory.mp3'
    },
    {
        img : 'images/Taylor.jpg',
        name : 'The Very First Night (Taylor\'s version)',
        artist : 'Taylor Swift',
        music : 'music/TheVeryFirstNight.mp3'
    },
    {
        img : 'images/KatyPerry-1.jpg',
        name : 'Firework',
        artist : 'Katy Perry',
        music : 'music/Firework.mp3'
    },
    {
        img : 'images/SeeYouAgain.png',
        name : 'See You Again',
        artist : 'Wiz Khalifa, Charlie Puth',
        music : 'music/SeeYouAgain.mp3'
    },
    {
        img : 'images/WildestDream.png',
        name : 'Wildest Dream',
        artist : 'Taylor Swift',
        music : 'music/WildestDream.mp3'
    },
    {
        img : 'images/ThangDien.jpg',
        name : 'Thang Dien',
        artist : 'Justa Tee, Phuong Ly',
        music : 'music/ThangDien.mp3'
    },
    {
        img : 'images/KatyPerry.jpg',
        name : 'Hot N Cold',
        artist : 'Katy Perry',
        music : 'music/HotNCold.mp3'
    },
    {
        img : 'images/1D.jpg',
        name : 'What Makes You Beautiful',
        artist : 'One Direction',
        music : 'music/WhatMakesYouBeautiful.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}