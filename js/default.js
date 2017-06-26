var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

for(var i=1; i<word; i++)
{
  if(word%3==0)
  {
  war li=document.createElement('li');
  li.textContent='fizz';
  document.getElementById('list').appendChild(li);
  }
  else if(word%5==0)
  {
  ar li=document.createElement('li');
  li.textContent='buzz';
  document.getElementById('list').appendChild(li);
  }
  else if(word%5==0 && word%3==0)
  {
    ar li=document.createElement('li');
    li.textContent='fizz';
    document.getElementById('list').appendChild(li);
    
    ar li=document.createElement('li');
    li.textContent='buzz';
    document.getElementById('list').appendChild(li);
  }
  else{
    var li=document.createElement('li');
    li.textContent=word
    document.getElementById('list').appendChild(li);
  }
};

