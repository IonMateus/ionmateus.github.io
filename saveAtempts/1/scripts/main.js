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
  var isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
  isDarkTheme = !isDarkTheme
  //const color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1');
  //const color2 = getComputedStyle(document.documentElement).getPropertyValue('--color2');
  
  var whiteColor = "#fff"
  var blackColor = "#050505"

  if (isDarkTheme) {
    document.documentElement.style.setProperty('--color1', whiteColor);
    document.documentElement.style.setProperty('--color2', blackColor);
  } else {
    document.documentElement.style.setProperty('--color1', blackColor);
    document.documentElement.style.setProperty('--color2', whiteColor);
  }
 
  localStorage.setItem('isDarkTheme', isDarkTheme);
}

document.addEventListener('DOMContentLoaded', (event) => {
  var isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
  if (isDarkTheme) {
    document.documentElement.style.setProperty('--color1', '#fff');
    document.documentElement.style.setProperty('--color2', '#000');
  } else {
    document.documentElement.style.setProperty('--color1', '#000');
    document.documentElement.style.setProperty('--color2', '#fff');
  }
});



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


//-------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  var accordionHeaders = document.querySelectorAll(".accordion #accordion-header");
  
  accordionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
          var accordionContent = this.nextElementSibling;
          accordionContent.classList.toggle("active"); 
      });
  });
});


//-------------------------------------------------------------


const projectsContent = document.getElementById('projectsContent');

let isDown = false;
let startX;
let scrollLeft;

projectsContent.addEventListener('mousedown', (e) => {
    isDown = true;
    projectsContent.classList.add('active');
    startX = e.pageX - projectsContent.offsetLeft;
    scrollLeft = projectsContent.scrollLeft;
});

projectsContent.addEventListener('mouseleave', () => {
    isDown = false;
    projectsContent.classList.remove('active');
});

projectsContent.addEventListener('mouseup', () => {
    isDown = false;
    projectsContent.classList.remove('active');
});

projectsContent.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsContent.offsetLeft;
    const walk = (x - startX) * 2; // multiplicador para aumentar a velocidade de rolagem
    projectsContent.scrollLeft = scrollLeft - walk;
});
















document.addEventListener('DOMContentLoaded', function() {
  const projectsContent = document.getElementById('projectsContent');
  const difficultyFilter = document.getElementById('difficultyFilter');

  // Listener para alterações no combobox
  difficultyFilter.addEventListener('change', filterProjects);

  function filterProjects() {
      const selectedDifficulty = difficultyFilter.value;

      // Iterar sobre todos os cards
      const cards = projectsContent.querySelectorAll('.card');
      cards.forEach(card => {
          const cardDifficulty = card.getAttribute('data-difficulty');
          if (selectedDifficulty === 'all' || selectedDifficulty === cardDifficulty) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
});
