import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = localStorage.getItem('videoplayer-current-time');

const onPlay = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(time || 0);
