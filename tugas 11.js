function setup() {
    // put setup code here
    createCanvas(800,400);
   
    j = 0;
    y = 100;
}

function draw() {
    //bagian kanan
    // put drawing code here
    background(200);
    var y = 200 + 50 * Math.sin(PI/100*j)
    j+=1
    fill (255, 255, 0);
    ellipse(470, y, 200, 200);
    var y = 180 + 50 * Math.sin(PI/100*j)
    j+=1
    fill (0, 0, 0);
    ellipse(500, y, 25, 25);
    ellipse(450, y, 25, 25);
    var y = 230 + 50 * Math.sin(PI/100*j)
    j+=1
    fill (255, 255, 0)
    strokeWeight(5)
    arc(470, y, 70, 65, 0, PI);

    //bagian kiri
    fill (255, 255, 0);
    ellipse(150, 190, 200, 200);
    fill (0, 0, 0);
    ellipse(170, 180, 25, 25);
    ellipse(130, 180, 25, 25);
    fill (255, 255, 0)
    arc(150, 230, 70, 65, 0, PI);

}