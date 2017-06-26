var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

for(var i=1; i<word; i++)
{
document.getElementById('form').onsubmit=function()
{
  if(word%3==0)
  {
  window.alert(document.getElementById('form').Fizz.value);
  }
  else if(word%5==0)
  {
  window.alert(document.getElementById('form').Buzz.value);
  }
  else if(word%5==0 && word%3==0)
  {
    window.alert(document.getElementById('form').Buzz.value);
    window.alert(document.getElementById('form').Fizz.value);
  }
  else{
window.alert(document.getElementById('form').i.value);
  }
};
}
