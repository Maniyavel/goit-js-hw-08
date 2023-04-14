import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime ="videoplayer-current-time";
const localCurrentTime=localStorage.getItem(currentTime);

    const onPlay = function(timeupdate) {
        console.log(timeupdate);
        localStorage.setItem(currentTime,timeupdate.seconds);
    };

    player.on('timeupdate', throttle(onPlay, 1000));

    player.setCurrentTime(localCurrentTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });