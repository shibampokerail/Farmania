let clock = 0 // 0 is noon 
let night = false;
let is_inside_house = false;
const village_colliders = [
    {
        "x": 408,
        "y": 15,
        "w": 573,
        "h": 129
    },
    {
        "x": 801,
        "y": 471,
        "w": 924,
        "h": 588
    },
    {
        "x": 312,
        "y": 585,
        "w": 564,
        "h": 633
    },
    {
        "x": 513,
        "y": 636,
        "w": 627,
        "h": 756
    },
    {
        "x": 789,
        "y": 591,
        "w": 942,
        "h": 705
    },
    {
        "x": 633,
        "y": 531,
        "w": 786,
        "h": 663
    },
    {
        "x": 942,
        "y": 411,
        "w": 1089,
        "h": 582
    },
    {
        "x": -75,
        "y": 111,
        "w": 414,
        "h": 384
    },
    {
        "x": -81,
        "y": 405,
        "w": 252,
        "h": 474
    },
    {
        "x": 279,
        "y": 405,
        "w": 636,
        "h": 477
    },
    {
        "x": 585,
        "y": 186,
        "w": 711,
        "h": 312
    },
    {
        "x": 384,
        "y": 99,
        "w": 633,
        "h": 162
    },
    {
        "x": 552,
        "y": 123,
        "w": 645,
        "h": 456
    },
    {
        "x": 342,
        "y": 450,
        "w": 450,
        "h": 522
    }
];
const house_colliders = [
    {
        "x": 549.5,
        "y": 137.5,
        "w": 726.5,
        "h": 452.5
    },
    {
        "x": 531.5,
        "y": -24.5,
        "w": 1104.5,
        "h": 215.5
    },
    {
        "x": 702.5,
        "y": 179.5,
        "w": 777.5,
        "h": 278.5
    },
    {
        "x": 855.5,
        "y": 164.5,
        "w": 1110.5,
        "h": 269.5
    },
    {
        "x": 981.5,
        "y": 248.5,
        "w": 1086.5,
        "h": 656.5
    },
    {
        "x": 558.5,
        "y": 476.5,
        "w": 690.5,
        "h": 635.5
    },
    {
        "x": 540.5,
        "y": 416.5,
        "w": 624.5,
        "h": 512.5
    },
    {
        "x": 657.5,
        "y": 629.5,
        "w": 747.5,
        "h": 728.5
    },
    {
        "x": 861.5,
        "y": 608.5,
        "w": 1008.5,
        "h": 728.5
    },
    {
        "x": 711.5,
        "y": 617.5,
        "w": 777.5,
        "h": 710.5
    }
]


function loadLevel(){
    
    if (is_inside_house){

        background(0,0,0)
        
        loadBackground(village_house,560,50,600,800)
        loadPlayer(player_x,player_y);
        loadHouseEvents();

    } else {
        loadPlayer(player_x,player_y);
        bg = village;
        loadBackground(village_overlay);
        loadVillageEvents()
    }
        if (night == false){
            dayEveningOverlay(clock)
            clock +=0.01

            if (clock >= 60){
                night =true;
            } 
        } else {
            dayNightOverlay(clock)
            clock -=0.01
            if (clock <= 0){
                night =false;
            }
        }
        
        
        listenPlayerControls();
        loadText()
    
}


function dayEveningOverlay(time){
    background(255,165,0,time);

}

function dayNightOverlay(time){
    background(0,0,200,time);

}


function detectCollision(x, y , colliders) {
    if (debugMode){
        return false;
    }
    for (let collider of colliders) {
        // Check if the point (x, y) is inside the current collider
        if (
            x >= collider.x &&                          // X is greater than or equal to the left side
            x <= collider.w &&             // X is less than or equal to the right side
            y >= collider.y &&                          // Y is greater than or equal to the top side
            y <= collider.h                 // Y is less than or equal to the bottom side
        ) {
            return true;  // Point is inside this collider
        }
    }
    return false; 
    
  }

  function loadText(){
    textFont(menuFont);
    textSize(150 * windowWidth/2560);
    textAlign(CENTER,CENTER);
    fill(255,255,255);
    if (night==false && clock<30)
    {text( "Day",windowWidth/2,50);}
    if (night==false && clock>30)
    {text( "Evening",windowWidth/2,50);}
    if (night==true && clock>30)
    {text( "Night",windowWidth/2,50);}
    if (night==true && clock<30)
    {text( "Morning",windowWidth/2,50);}
    
  }

  function loadVillageEvents(){
    if (player_x<=280 && player_x>=237 && player_y<=387 && player_y>=387){
        is_inside_house = true;
        player_x = -50+(windowWidth/2);
        player_y = 230+(windowHeight/2);
        player_sprite = player_up;
        colliders = house_colliders;
    }
  }

  function loadHouseEvents(){
    if (player_y>=661){
        is_inside_house = false;
        player_x = 260;
        player_y = 390;
        player_sprite = player_up;
        colliders = village_colliders;
        
    }
  }
