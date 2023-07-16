
function disablefind()
{
    
var findFoodButton = document.getElementById("jb");
var delbut= document.getElementById("jbut3");

// Disable the button find shit
findFoodButton.disabled = true;
findFoodButton.style.cursor= "auto";
delbut.disabled=true;
delbut.style.cursor= "auto";

}
function disablemail()
{
    
var mailbut = document.getElementById("dis");

// Disable the button mail
mailbut.disabled = true;
mailbut.style.cursor= "auto";

}

/*function func2()
{
    document.getElementById('j1').innerHTML= `
    <div id="sj1">
            <p class ="para">You clicked on Menu!</p>
        </div>
    `
        
}*/

function func2()
{
    document.getElementById('myDropdown').classList.toggle("show");
}
window.onclick = function(event)
{
    if(!event.target.matches('.jbut2'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdowns.length;i++)
        {
            var openDropdown= dropdowns[i];
            if (openDropdown.classList.contains('show'))
              {
                openDropdown.classList.remove('show');
              }
        }
    }
}
function myFunc2()
{
    window.open("https://www.google.com");
}
  //javascript has this weird function where people can do weird stuff
  // and no one notices and we have to pretend like we're getting it
  //hehe wtf am i writing i have no idea XD
  // if only nani wasn't roaming around at midnight, i could do my
  // work peacefully but no. She likes to know what exactly is going on in the town
  // soooo i think she's here again and i have to pretend like im working on something
  // maybe i can actually do that :D
  // lemme just write the random

  /*
  function myfunc3()
  {
    var element=document.getElementById('wholeid');
    //element.innerHTML = " Do you want to shop more?"
    //element.style.backgroundColor= "white";
    //element.style.fontSize= "25px";
    var img= getElementById("bimg");
    img.src= "bg.jpg";
    var container= getElementById("wholeid");
    container.appendChild(img);
    element.textContent= "would you like to shop more?"
  }*/


  // Important!!!!!!!!!!!!
  /*
 document.querySelector("#jbut3").onclick=function()
 {
    var h1=document.querySelector("#wholeid");
    h1.innerText="ayo";
    var el2= document.getElementById("wholeid");
    el2.style.backgroundColor="white";
    el2.style.fontSize="25px";
    el2.style.textAlign="center";
 }*/

 //document.querySelector("#jbut3").onclick=
 function myfunc4()
 {
    var h1=document.querySelector("#jbut3");
    h1.innerText="Delivery in Process!";
    h1.style.width= "300px"
    h1.style.backgroundColor= "White";
    h1.style.color= "Black";

 }

 var newbg=document.getElementById("wholeid");
 function logg()
 {
    disablefind();
    disablemail();
    newbg.style.backgroundColor= "white";
    //newbg.style.color= "white";

   // order2.style.backgroundColor= "rgba(137, 128, 101, 0)";
    // order2.style.borderRadius= "20px";
    // order2.style.width= "200px";
    // order2.style.height= "400px";
    // order2.style.borderRadius= "20px";
    var remo= document.getElementById("details");
    remo.style.transition = "opacity 1s ease";
    remo.style.opacity= "0";

    /// for Log in
    var order2=document.getElementById("o1").innerHTML=
    `
    <div id = "order" class = "o2">

    
     <label class ="lab2" for="emailadd">Enter Email Address/Phone Number</label>
     <input class="i2" type="email" id="emailadd" name="emailadd">
     
     <label class ="lab3" for="pwd">Enter Password</label>
     <input class="i3" type="password" id="pwd" name="pwd">
      
    </div>
    <form action="backend.php" target="_blank"></form>

    `
    setTimeout (function()
    {
        newbg.style.backgroundColor= "white";
        var help = document.getElementById("order");
        help.style.transition= "opacity 2s ease";
        help.style.opacity="1"; 
    }, 10);
    
 }



//  for Sign up

function Sign()
{
    disablefind();
    disablemail();

    newbg.style.backgroundColor= "white";
    var remo= document.getElementById("details");
    remo.style.transition = "opacity 1s ease";
    remo.style.opacity= "0";

    var order3=document.getElementById("o1").innerHTML=
`
<div id = "ord2" class = "or2">

 <label class ="lab2" for="emailadd">Enter Email Address/Phone Number</label>
 <input class="i2" type="text" id="emailadd" name="emailadd">

 <label class ="lab3" for="passin">Create a Password(8 Letters)</label>
 <input class="i4" type="password" id="passin" name="pass">
 
 <p id="pwordMessage"></p>
 <button id ="pbut" class ="pb">Next
 </button>
</div>
<form action="backend.php" target="_blank"></form>
`                                       //id got from input
var passwordInput = document.getElementById("passin");
var submit= document.getElementById("pbut");
var msg=document.getElementById("pwordMessage");
submit.addEventListener("click", function(){
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        // Rest of your code...
        var pword=passin.value;
    if(pword.length<8){
        msg.textContent= "Password must be of 8 characters!";
    }
    else if (! /\d/.test(pword)){
        msg.textContent= "Password must contain a digit";
    }
    else if(! /[a-z]/.test(pword)){
        msg.textContent= "Password must contain a small letter";
    }
    else if (! /[A-Z]/.test(pword)){
        msg.textContent= "Password must contain a capital letter";
    }
    else{
        msg.textContent= "Thank you for signing up!";
    }
      });
    
}
)


setTimeout (function()
{
    
    var help = document.getElementById("ord2");
    help.style.transition= "opacity 2s ease";
    help.style.opacity="1"; 
}, 10);


}

/*
function myfunc()
{
    disablefind();
    disablemail();
    
    //  var remo= document.getElementById("wholeid");
    //  remo.style.transition= "opacity 1s ease";
    //  remo.style.opacity="0";

    var bgru= document.getElementById("newbg2").innerHTML=
    `
    <div id="bgg" class="bg2">
    
        <div id="b2" class="cards">
            <img class="cimg" src="Rectangle 17.png" alt="">
        </div> 
    </div>
    `
    setTimeout (function()
    {
        var help = document.getElementById("bgg");
        help.style.transition= "opacity 2s ease";
        help.style.opacity="1"; 
    }, 10);
    //bg2.style.backgroundColor= "#FBC507"
}

*/