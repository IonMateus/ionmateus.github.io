
var variavelAdquirida = JSON.parse(localStorage.getItem('themeKey'));
let isDarkTheme = false;
if(isDarkTheme = variavelAdquirida[0].isDarkTheme){}

setTheme();
function setTheme(){
    if(isDarkTheme){
        setDarkTheme();
        isDarkTheme = false
    }else{
        setLightTheme()
        isDarkTheme = true
    }
}


function setLightTheme(){
    document.documentElement.style.setProperty('--principal-color', '#10395C');
    document.documentElement.style.setProperty('--principal-dark', '#1E72B9');
    document.documentElement.style.setProperty('--dark', '#000000');
    document.documentElement.style.setProperty('--light', '#000000');  
    document.documentElement.style.setProperty('--light-grey', '#212121'); 
    document.documentElement.style.setProperty('--dark-grey', '#e8e8e8');

    document.getElementById("themeIcon").src= "../images/darkIcon.png"

    let theme = JSON.parse(localStorage.getItem('themeKey') || '[]');
    var themeArray = {isDarkTheme: false,};
    theme[0] = themeArray
    localStorage.setItem('themeKey', JSON.stringify(theme));
}

function setDarkTheme(){
    document.documentElement.style.setProperty('--principal-color', '#1E72B9');
    document.documentElement.style.setProperty('--principal-dark', '#10395C');
    document.documentElement.style.setProperty('--dark', '#c0c0c0');
    document.documentElement.style.setProperty('--light', '#ffffff');  
    document.documentElement.style.setProperty('--light-grey', '#e8e8e8'); 
    document.documentElement.style.setProperty('--dark-grey', '#212121');

    document.getElementById("themeIcon").src= "../images/lightIcon.png"

    let theme = JSON.parse(localStorage.getItem('themeKey') || '[]');
    var themeArray = {isDarkTheme: true,};
    theme[0] = themeArray
    localStorage.setItem('themeKey', JSON.stringify(theme));
}

