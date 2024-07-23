let hue;

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    strokeWeight(5);
    stroke('black');
    rect(10, 10, windowWidth - 20, windowHeight - 20, 30);
  
    strokeWeight(5);
    line(windowWidth/2, 14, windowWidth/2, height - 10);
    hue = 0;
}

// function draw() {
//     fill(0);
//     stroke(255);
//     ellipse(mouseX, mouseY, 80, 80);
// }
function draw() {
  
    if (hue > 360) {
        hue = 0;
    } else {
        hue++;
    }

    colorMode(HSL, 360);
    strokeWeight(2);
    fill(hue, 200, 200);
    ellipse(mouseX, mouseY, 80, 80);
}
