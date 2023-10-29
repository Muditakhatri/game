let game=[];
let user=[];
let started=false;
let level=0;
let highestScore=0;
let h2=document.querySelector("h2");
let ol=document.querySelector("ol");
let randomArr=["yellow","green","purple","pink"];
document.addEventListener("keypress",function(){
    if(started==false)
    {
        // console.log("started");
        started=true;
    }
    levelUp();
})
function gameFlash(btn){
  btn.classList.add("flash"); 
  setTimeout(function(){
    btn.classList.remove("flash");
  },100)  
}
function userFlash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function(){
      btn.classList.remove("userflash");
    },100)  
  }
function levelUp(){
user=[];
  level++;
h2.innerText=`level ${level}`;
let randomIdx=Math.floor(Math.random()*3);
let randomCol=randomArr[randomIdx];
let randombtn=document.querySelector(`.${randomCol}`);
game.push(randomCol);
console.log("game",game);
gameFlash(randombtn);

}

function check(indx){
  
  if(user[indx]===game[indx]){
    if(user.length===game.length)
    {
      setTimeout(levelUp,1000);
      h2.innerText=`level ${level}`;
    }
  }
  else{
    h2.innerHTML=`Game over! your score is <b>${level}</b> <br>please enter any key to restart. `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },200)
    
    highScore(level);
    reset();
    
  }
}
function clickedBtn(){
    // console.log("button was clicked");
    userFlash(this);
    userClk=this.getAttribute("id");
    user.push(userClk);
    console.log("user",user);
    check(user.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",clickedBtn);
}
function reset(){
  game=[];
  user=[];
  started=false;
  level=0;
}
function highScore(lvl){
  let item=document.createElement("li");
  item.innerText=`HIGHEST SCORE ${lvl}`;
  ol.appendChild(item);

}