let throttle = require('lodash.throttle');
// on method 

const onPlay = function (data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);
// off method 

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// // If later on you decide that you don’t need to listen for play anymore.
// player.off('play', onPlay);

// // Alternatively, `off` can be called with just the event name to remove all
// // listeners.
// player.off('play');

player.getCurrentTime().then(function (seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});

player.on('play', function(data) {
    // data is an object containing properties specific to that event
    console.log("ji")
});





