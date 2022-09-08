window.addEventListener("DOMContentLoaded", function(){
    reveal
  
const connt  = document.querySelector(".secure")
const Btns = document.querySelectorAll(".start")
Btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const tag = (e.target.dataset.id)
    const id = document.getElementById(tag)
console.log(tag)
if(tag){
  const mine = document.querySelectorAll(".mine");
  mine.addEventListener("click", function(e){
      console.log(e.target)
    })
  
  const mining = document.querySelectorAll(".mining")
  mining.forEach(function(minin){
    minin.classList.add("active")
  })
}

const bit = document.querySelectorAll(".bita")
bit.forEach(function(myDiv){
  myDiv.classList.remove("active")
const mine = document.querySelectorAll(".mine")
  if(id){
    id.classList.add("active")
  }
  else{
    myDiv.classList.remove("active")
    
  }
})
  })
})
  
})
window.addEventListener("scroll", reveal
    )
    
    function reveal(){
      let tag = document.querySelectorAll(".myAnime")
  for(var i = 0; i < tag.length; i++){
    var windowHeight = window.innerHeight;
    var elemTop = tag[i].getBoundingClientRect().top;
    var visibe = 320;

    if(windowHeight - visibe > elemTop){
      tag[i].classList.add("Anime")
    }
   else{
    tag[i].classList.remove("Anime")
  }
 }
    }