var boxes = document.getElementsByClassName("box");

function sum()
{
  var i , num =0;
  for(i =0; i<boxes.length;i++)
  { if(boxes[i].checked) num++ ;}
  document.getElementById("mtr").value = num ;
  document.getElementById("num").innerHTML = num;  
}

function zero()
{    
  var i = 0;
  while (i<boxes.length)
  { boxes[i].checked=false; i++; }
  sum();
}