import throttle from "lodash.throttle";

 const iframe = document.querySelector('iframe');
 const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(setTimeToLS, 1000)) // usses library 
checkCurrentTime(); // dont forget to call the function 

function setTimeToLS(time) {
   console.log(time.percent)  //gets the current time .001
    
    localStorage.setItem(STORAGE_KEY, time.seconds.toString()) // gets the time object and converts the current second to a string 
}

function checkCurrentTime() {
    const savedTime = localStorage.getItem(STORAGE_KEY);

    if (!savedTime) {  
        return 
    }
     player.setCurrentTime(savedTime);
    
}

