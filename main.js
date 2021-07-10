var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//rectangle
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
//blue ring
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(240, 210, 50, 0, 2*Math.PI);
ctx.stroke();
//black ring
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(350, 210, 50, 0, 2*Math.PI);
ctx.stroke();
//red ring
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(460, 210, 50, 0, 2*Math.PI);
ctx.stroke();
//yellow ring
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(295, 270, 50, 0, 2*Math.PI);
ctx.stroke();
ctx.stroke();
//green ring
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(405, 270, 50, 0, 2*Math.PI);
ctx.stroke();