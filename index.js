
for (let i = 0; i<document.querySelectorAll("button").length; i++) {    
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let sound = this.innerHTML;
        switch(sound) {
            case '1':
                let sound1 = new Audio("sounds/werelost.mp3");
                sound1.play();
                break;
            case '2':
                let sound2 = new Audio("sounds/oliveoil.mp3");
                sound2.play();
                break;
            case '3':
                let sound3 = new Audio("sounds/whoisthat.mp3");
                sound3.play();
                break;
            case '4':
                let sound4 = new Audio("sounds/youarecreepyasshit.mp3");
                sound4.play();
                break;
            case '5':
                let sound5 = new Audio("sounds/youmeanme.mp3");
                sound5.play();
                break;
            case '6':
                let sound6 = new Audio("sounds/coral-longer.mp3");
                sound6.play();
                break;
            case '7':
                let sound7 = new Audio("sounds/hotdiggitydog.mp3");
                sound7.play();
                break;    
            case '8':
                let sound8 = new Audio("sounds/sendmeapostcard-longer.mp3");
                sound8.play();
                break;
        }
    });
};


