const videoElement1 = document.getElementById('vid1');
const videoElement2 = document.getElementById('vid2');

window.addEventListener('scroll', (event) => {
    if(window.scrollY >= videoElement1.scrollHeight){
        console.log(videoElement1.scrollHeight)

        console.log(event)
    }
});

document.getElementById('startBtn').addEventListener('click', (event) => {
    document.getElementById('vidsCont').style.display = 'block';
    disableScroll();
    goToScroll(videoElement1.id);
    videoElement1.play();
    setTimeout(() => {
        goToScroll(videoElement2.id)
        videoElement2.play();
    },7000)
})



let goToScroll = (elm) => {
location.href = `#${elm}`;
}

// call this to Disable scrolling
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }