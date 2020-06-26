let drum = document.querySelectorAll(".drum")
console.log(drum)

document.addEventListener('keypress',function(event){
    let keyValue = event.key
    playAudio(keyValue)
    animate()
})

for(var i=0;i<drum.length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){       
       let drumName = this.innerHTML
       playAudio(drumName.toLowerCase())
    })    
    
}

function animate(val){
    let myClass = document.querySelector("."+val)
    myClass.classList.add("pressed")
    setTimeout(function(){
        myClass.classList.remove("pressed");
    },100)
}

function playAudio(sound){
    switch(sound){
        case 'A':{
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
            animate("a")
            break;
        }
        case 'F':{
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
            animate("f");
            break;
        }
        case 'B':{
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            animate("b");
            break;
        }
        case 'C':{
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            animate("c");
            break;
        }
        case 'D':{
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            animate("d");
            break;
        }
        case 'E':{
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            animate("e");
            break;
        }
        case 'G':{
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            animate("g");
            break;
        }
        case 'a':{
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
            animate("a");
            break;
        }
        case 'f':{
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
            animate("f");
            break;
        }
        case 'b':{
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            animate("b");
            break;
        }
        case 'c':{
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            animate("c");
            break;
        }
        case 'd':{
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            animate("d");
            break;
        }
        case 'e':{
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            animate("e");
            break;
        }
        case 'g':{
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            animate("g");
            break;
        }
    }
    
      
}
