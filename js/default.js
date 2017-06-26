
var i=0;
var a;
var word


a=word;

while(true){
  i+=1;
  
  if(a%3==0)
  {
   System.out.println("fizz");
  }
  else if(a%5==0)
  {
    System.out.println("buzz");
  }
  else if(a%5==0 && a%3==0)
  {
    System.out.println("fizz");
    System.out.println("buzz");
  }
  else{
    System.out.println(i);
    }
  
  if(i==a)
  {
    break;
  }
}

