

function initializeMenuOptions(){
    
    textFont(menuFont);
    textSize(500 * windowWidth/2560);
    textAlign(CENTER,CENTER);
    fill(245, 185, 66);
    background(0,0,0,70);
    text("Farmainia",windowWidth/2,windowHeight/2-250);
    textSize(100);
    text("press enter to play!",windowWidth/2,windowHeight/2+200);
    
}

function loadMenu(){
    if (isMenuScreenActive){
        bg = menuScreen;
        initializeMenuOptions();
    }
    
}

function initializeMenuOptions(){
    
    textFont(menuFont);
    textSize(500 * windowWidth/2560);
    textAlign(CENTER,CENTER);
    fill(245, 185, 66);
    background(0,0,0,70);
    text("Farmainia",windowWidth/2,windowHeight/2-250);
    textSize(100);
    text("press enter to continue!",windowWidth/2,windowHeight/2+200);
    
}

function loadPauseMenu(){
    if (isPaused){
        bg = pauseScreen;
        initializePauseMenuOptions();
    }

    function initializePauseMenuOptions(){
    
        textFont(menuFont);
        textSize(500 * windowWidth/2560);
        textAlign(CENTER,CENTER);
        fill(255, 255, 255);
        background(0,0,0,70);
        text("Farmainia",windowWidth/2,windowHeight/2-250);
        textSize(100);
        text("paused",windowWidth/2,windowHeight/2);
        textSize(100);
        text("press esc to continue!",windowWidth/2,windowHeight/2+200);
        
    }
    
}