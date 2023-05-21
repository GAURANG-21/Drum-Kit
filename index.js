// addEventListener('keydown', function(event) {
//   const key = event.key;          //This is to check which key is pressed.
  // const boxes = document.querySelectorAll(".drum");
//   if(boxes!=null)
//   handleClick(key);
// });
// function handleClick(key){
//   var audio=new Audio('/sounds/crash.mp3');
//   audio.play();
// }


//METHOD 1
// boxes.forEach(drum => {
//   drum.addEventListener('click',handleClick);
// });


// METHOD 2
// for(var i=0;i<boxes.length;i++)
// boxes[i].addEventListener("click", function(){
//   console.log(this.innerHTML);
//   this.style.color="white";
// });



// var numberOfDrumButtons=document.querySelectorAll(".drum").length;
// for(var i=0;i<numberOfDrumButtons;i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     console.log(this.innerHTML);
//   })
// }



addEventListener('keydown',function(event){
  const key=event.key;
  entire(key);
});
  function entire(key){
  box=document.querySelector("."+key);
  if(box!=null)
  {
    buttonAnimation(box);
    switch(key){
    case "w":
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio=new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "k":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "l":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    }
  }
}
function buttonAnimation(box)
{
  box.classList.add("pressed");
  setTimeout(removebuttonAnimation, 100, box);
}
function removebuttonAnimation(box)
{
  box.classList.remove("pressed");
}