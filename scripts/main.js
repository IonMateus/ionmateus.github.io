
function toggleHeaderLinks() {
    const headerLinks = document.getElementById('headerLinks');
    if (headerLinks) {
      headerLinks.classList.toggle('newHeaderLinks');
    }
  }

window.onload = function(){
  if (window.innerWidth <= 600) {
    toggleHeaderLinks();
  } else {
    headerLinks.classList.remove('newHeaderLinks');
  }
}


