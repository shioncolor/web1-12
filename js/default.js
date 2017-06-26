var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('form').onsubmit=function(){
window.alert(document.getElementById('form').word.value);
};

for(var i=1; i< word; i++)
{
  if(word%3==0)
  {
    var li=document.createElement('li');
    li.textContent='fizz';
    document.getElementById('list').appendChild(li)
  }
  else if(word%5==0)
  {
    var li=document.createElement('li');
    li.textContent='buzz';
    document.getElementById('list').appendChild(li)
  }
  else if(word%5==0 && word%3==0)
  {
    var li=document.createElement('li');
    li.textContent='fizz';
    document.getElementById('list').appendChild(li)
    
   var li=document.createElement('li');
    li.textContent='buzz';
    document.getElementById('list').appendChild(li)
  }
  else{
    li.textContent=word;
  }
}

