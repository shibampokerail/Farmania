

function loadBackground(img, x=0,y=0, width=windowWidth, height=windowHeight){
    image(img,x,y,width,height);
}

function loadPlayer(x, y){
    noStroke();
    fill(0, 0, 0, 150);
    ellipse(x+40, y+110, 40, 20);
    image(player_sprite, x,y, 90, 120);
    

}


function toggleMusic(){
    if (bgMusic.isPlaying()){
        bgMusic.stop();
    } else {
        bgMusic.play();
    }
}


function loadScreen(){
    loadBackground(bg);
    
    if (isMenuScreenActive){
        loadMenu();
    } else if (isPaused){
        menuScreenMusic.stop();
        gameMusic.stop()
        if (!pauseScreenMusic.isPlaying()){
            pauseScreenMusic.play();
        }
        

        loadPauseMenu();
    }
    else
    {   
        menuScreenMusic.stop();
        if (!gameMusic.isPlaying()){
            gameMusic.play()
        }
        
        pauseScreenMusic.stop();
        loadLevel();
        debug();
    }
    

    
}

function listenPlayerControls(){
    if (keyIsDown(87)) { 
        player_sprite.play()
        player_sprite = player_up;
        
        if (!detectCollision(player_x, player_y-player_speed, colliders)){
            player_y-=player_speed;
        }
        
    } 
    else if (keyIsDown(65)) { 
        player_sprite.play()
        player_sprite = player_left; 
        if (!detectCollision(player_x-player_speed, player_y, colliders)){
            player_x-=player_speed;
        }
    } 
    else if (keyIsDown(83)) { 
        player_sprite.play()
        player_sprite = player_down; 
        if (!detectCollision(player_x, player_y+player_speed, colliders)){
            player_y+=player_speed;
        }
    }
    else if (keyIsDown(68)) { 
        player_sprite.play()
        player_sprite = player_right; 
        if (!detectCollision(player_x+player_speed, player_y, colliders)){
            player_x+=player_speed;
        }
    }  else{
        player_sprite.reset();
        player_sprite.pause();
    }

    
    
}


let tempCollider = {x:"",y:"",w:"",h:""}
function keyPressed(){
    if (key === 'q') {
        debugMode = !debugMode
        console.log("Debug Mode toggle");
      }
    if (keyCode===32){
        
        if (tempCollider.x==""){
            tempCollider.x =player_x;
            tempCollider.y =player_y;
        } else {
            tempCollider.h = player_y;
            tempCollider.w = player_x;
            colliders.push(tempCollider);
            tempCollider = {x:"",y:"",w:"",h:""}

            console.log(colliders);
        }
    }
    if (key === 'e') {
        colliders.pop()
        console.log(colliders);
    }
    
    if (keyCode == ESCAPE && !isMenuScreenActive){
        isPaused = !isPaused;

    }
    
    if (key === 'm'){
        toggleMusic();
    }

}







function debug(){
    if (debugMode){
        debugColliders();
       
    }
   
}

function debugColliders(){
    for (let collider of colliders) {
        let square = collider
        let  width = square.w - square.x;
        let height = square.h - square.y;
        fill(0, 0, 255);
        rect(square.x+50, square.y+100, width, height);
    }
}