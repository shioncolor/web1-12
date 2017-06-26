var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

doument.getElementById('form').onsubmit=function(){
window.alert(document.getElementById('formm')..word.valie);
};

for(var i=1; i< word; i++)
{
  if(word%3==0)
  {
  li.textContent='fizz';
  }
  else if(word%5==0)
  {
  li.textContent='buzz';
  }
  else if(word%5==0 && word%3==0)
  {
    li.textContent='fizz';
    
    li.textContent='buzz';
  }
  else{
    li.textContent=word;
  }
}

