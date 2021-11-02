canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2D");
roverwidth=100;
roverheight=90;
roverDX=10;
roverDY=10;
BackgroundImageCanvas="mars.jpg";
BackgroundImageRover="rover.png";
function add() {
    bgimg = new Image();
    bgimg.onload = uploadbackground();
    bgimg.src = BackgroundImageCanvas;

    roimg = new Image();
    roimg.onload = uploadrover();
    roimg.src = BackgroundImageRover;
 
}
function uploadbackground() {
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roimg,roverDX,roverDY,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydow);
function mykeydow(e) {
  keyprs = e.keyCode;
  if (keyprs == '38')
{
up();
}
if (keyprs == '40')
{
down();
}
if (keyprs == '37')
{
left();
}
if (keyprs == '39')
{
right();
}
}
function up() {
    if (roverDY >= 0)
    {
     roverDY = roverDY-10;
     uploadbackground();
     uploadrover();
    }
}
function down() {
    if (roverDY <= 590)
    {
     roverDY = roverDY+10;
     uploadbackground();
     uploadrover();
    }
}
function left() {
    if (roverDX >= 0)
    {
     roverDX = roverDX-10;
     uploadbackground();
     uploadrover();
    }
}
function right() {
    if (roverDX <= 790)
    {
     roverDX = roverDX-10;
     uploadbackground();
     uploadrover();
    }
}