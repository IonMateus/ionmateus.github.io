
document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyC') {
        let color = `#${parseInt(Math.random()*100-1)}${parseInt(Math.random()*100-1)}${parseInt(Math.random()*100-1)}`
        document.documentElement.style.setProperty('--accent-color', color);
    }

    if (event.code === 'KeyD') {
        confirm("Are you sure do you want do delete Windows?")
    }
});