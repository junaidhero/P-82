var mouseEvent="empty"

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

colour="Red"
Width_of_line= "2"

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown (e) {
 colour = document.getElementById("colour").value;
 Width_of_line = document.getElementById("Width_of_line").value
 radius = document.getElementById("radius").value
 mouseEvent = "mouseDown"
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove (e) {
   var current_mouse_X = e.clientX - canvas.offsetleft
   var current_mouse_Y = e.clientY - canvas.offsetleft
   if (mouseEvent == "mouseDown") {
   console.log("Current Position Of X And Y Coordinates = ") 
   console.log("X ="+current_mouse_X+"Y = "+current_mouse_Y)
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = Width_of_line
   ctx.arc(current_mouse_X,current_mouse_Y,radius, 0 , 2 * Math.PI)
   ctx.stroke
   }
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup (e) {
       mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseup (e) {
     mouseEvent = "mouseleave"
}
function Clear_drawing(){
      ctx.clearRect(0,0,canvas.width,canvas.hight);
}