console.log("welcome");
let songindex=0;
let audioelement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('play');
let myprogressbar=document.getElementById('myprogressbar')
let songs=[
    {songname:"desikalakar",filepath:"songs/1.mp3",coverpath:"covers/break.jpg"},
    {songname:"desikalakar",filepath:"songs/1.mp3",coverpath:"covers/break.jpg" }
]

masterplay.addEventListener('click',audioelement.play())
// audioelement.play();
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})
console.log('timeupdate');