
let CursorImage = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg"

document.addEventListener('keydown', function (event) {
    if (event.key === 'c') {
        document.body.style.cursor = `url(${CursorImage}), auto`;
    }
});c

document.addEventListener('keyup', function (event) {
    if (event.key === 'c') {
        document.body.style.cursor = 'default';
    }
});