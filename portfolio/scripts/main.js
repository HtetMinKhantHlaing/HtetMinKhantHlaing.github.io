/*let myHeading = document.querySelector('h1');
myHeading.textContent= 'Dilo Web Developer';
let iPhone= 'new';
if (iPhone==='new'){
    alert('I got it');
}else{
    alert('I will buy later');
}
function multiply(num1,num2){
    let result=num1*num2;
    return result;
}
multiply (4*4);
document.querySelector('html').onclick = function(){
    alert('Ouch! Stop poking me')
};
let myHtml= document.querySelector('html');
myHtml.onclick=function(){alert('Htet')}*/
let myImage = document.querySelector('img');
myImage.onclick= function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='images/htetminkhant.png'){
        myImage.setAttribute('src','images/htetminkhanthlaing2.png');
    }else{myImage.setAttribute('src','images/htetminkhant.png');}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName (){
    let myName = prompt('Please Enter Your Name Sir');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Hello,'+myName;}
}

if (!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML= 'Hello,'+ storedName;
}
myButton.onclick= function(){
    setUserName();
}
  