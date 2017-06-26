
var i=0;
var word;

var li=document.createElement('li');

for(i=0; i<word; i++){

  if(word%3==0)
  {
   li.tectContent='fizz';
   doument.getElementById('list').appendhild(li);
  }
  else if(word%5==0)
  {
    li.tectContent='buzz';
   doument.getElementById('list').appendhild(li);
  }
  else if(word%5==0 && word%3==0)
  {
   li.tectContent='fizz';
   doument.getElementById('list').appendhild(li);
    
   li.tectContent='buzz';
   doument.getElementById('list').appendhild(li);
  }
  else
  {
    li.tectContent=i;
   doument.getElementById('list').appendhild(li);
  }
}

