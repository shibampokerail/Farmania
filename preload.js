let menuScreen,pauseScreen,village,village_overlay,village_house,bg5;
let menuFont;
let debugMode = false;
let isMenuScreenActive = true; //this is true  
let isPaused = false;
let bg;

let menuScreenMusic, pauseScreenMusic, gameMusic;
let bgMusic;

let player_up, player_down, player_right, player_left;
let player_sprite;
let player_x = 260;
let player_y = 390;
let player_speed = 3;
let colliders;

function preload(){
    menuScreen = loadImage(`./assets/bg/MenuScreen.gif`);
    pauseScreen = loadImage(`./assets/bg/PauseScreen.gif`);

    menuScreenMusic = loadSound('./assets/music/HomeScreen.mp3');
    pauseScreenMusic = loadSound('./assets/music/PauseMusic.mp3');
    gameMusic = loadSound('assets/music/gameMusic.mp3');


    village = loadImage(`./assets/bg/lvl1farm.gif`);
    village_overlay = loadImage(`./assets/bg/village_overlay.png`);
    village_house = loadImage(`./assets/bg/House.png`);

    menuFont = loadFont("./assets/fonts/font1.otf");
    player_up = loadImage(`./assets/sprites/player/noah_up.gif`);
    player_down = loadImage(`./assets/sprites/player/noah_down.gif`);
    player_right = loadImage(`./assets/sprites/player/noah_right.gif`);
    player_left = loadImage(`./assets/sprites/player/noah_left.gif`);
    

    player_sprite = player_down;
    bg = menuScreen;
    bgMusic = menuScreenMusic;
    colliders = village_colliders;
}