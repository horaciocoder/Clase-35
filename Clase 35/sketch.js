var hypnoticBall;
var database;
var ballPosition;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database);
    hypnoticBall = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var hypnoticBallPosition = database.ref("Ball position");
    hypnoticBallPosition.on("value", readPosition(), showError());
}
function readPosition(data) {
    position = data.val();
    console.log(position.x);
    console.log(position.y);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
function writePosition(x, y) {
    database.ref("ball/position").set( {
        "x": position.x + x,
        "y": position.y + y
    })
}
function draw(){
    background("white");
    if ("position" != undefined) {
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
