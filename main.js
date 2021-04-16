canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(290,230,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=5;
ctx.arc(400,230,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(510,230,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(340,270,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(460,270,50,0,2*Math.PI);
ctx.stroke();