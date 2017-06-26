
var i=0;
var word;

for(i=0; i<word; i++){
var li=document.createElement('li');
  if(word%3==0)
  {
   li.textContent='fizz';
   doument.getElementById('list').appendhild(li);
  }
  else if(word%5==0)
  {
    li.textContent='buzz';
   doument.getElementById('list').appendhild(li);
  }
  else if(word%5==0 && word%3==0)
  {
   li.textContent='fizz';
   doument.getElementById('list').appendhild(li);
    
   li.textContent='buzz';
   doument.getElementById('list').appendhild(li);
  }
  else
  {
    li.textContent=i;
   doument.getElementById('list').appendhild(li);
  }
}

