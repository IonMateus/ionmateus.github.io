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
  // Use 'window' instead of 'document' for page-relative coordinates
  TweenMax.to($bigBall, .4, {
    x: e.clientX - 15, // Use 'clientX' instead of 'pageX' for page-relative coordinates
    y: e.clientY - 15 // Use 'clientY' instead of 'pageY' for page-relative coordinates
  })
  TweenMax.to($smallBallBlack, .0, {
    x: e.clientX - 5, // Use 'clientX' instead of 'pageX' for page-relative coordinates
    y: e.clientY - 3 // Use 'clientY' instead of 'pageY' for page-relative coordinates
  })
  TweenMax.to($smallBallWhite, .0, {
    x: e.clientX - 5, // Use 'clientX' instead of 'pageX' for page-relative coordinates
    y: e.clientY - 5 // Use 'clientY' instead of 'pageY' for page-relative coordinates
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
