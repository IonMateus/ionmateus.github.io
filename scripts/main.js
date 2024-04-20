const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBallBlack = document.querySelector('.cursor__ball--small-black');
const $smallBallWhite = document.querySelector('.cursor__ball--small-white');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBallBlack, .0, {
    x: e.pageX - 5,
    y: e.pageY - 3
  })
  TweenMax.to($smallBallWhite, .0, {
    x: e.pageX - 5,
    y: e.pageY - 5
  })
}

function changeTheme() {
    const color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1');
    const color2 = getComputedStyle(document.documentElement).getPropertyValue('--color2');
    
    document.documentElement.style.setProperty('--color1', color2);
    document.documentElement.style.setProperty('--color2', color1);
}


// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}