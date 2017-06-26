var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('form').onsubmit=function(){
window.alert(document.getElementById('form').word.value);
};

var i=0;
while(true){
  i+=1;
  if(word%3==0)
  {
    li.textContent='fizz';
    document.getElementById('list').appendChild(li);
  }
  else if(word%5==0)
  {
    li.textContent='buzz';
    document.getElementById('list').appendChild(li);
  }
  else if(word%5==0 && word%3==0)
  {
    li.textContent='fizz';
    document.getElementById('list').appendChild(li);
   
    li.textContent='buzz';
    document.getElementById('list').appendChild(li);
  }
  else{
    li.textContent=word;
    document.getElementById('list').appendChild(li);
    }
  
  if(i==word)
  {
    break;
  }
}

