var box= document.getElementById('box');
var count=document.getElementById('count');
counter=0;

box.addEventListener('click',function(){
    counter++;
    count.innerText=counter+" ";
})