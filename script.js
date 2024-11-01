function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    loadScreen();
    //manageAudio();
    //circle(200,200,100);
    if (keyIsPressed && keyCode === ENTER) {
        isMenuScreenActive = false;
      } else {
        fill(255);
      }
    //   circle(mouseX, mouseY, 10);
}


