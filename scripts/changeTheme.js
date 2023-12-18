let black = "#000"
let white = "#fff"

window.onload = function(){
    variavelAdquirida = JSON.parse(localStorage.getItem('themeKey'));
    if(variavelAdquirida != null){
        if(variavelAdquirida[0].isDarkTheme == false){lightTheme()}else{darkTheme}
    }
}


function changeTheme() {
    var theme = getComputedStyle(document.documentElement).getPropertyValue('--color1').trim(); 
    if(theme == white){darkTheme()}else{lightTheme()}
}

function darkTheme() {
    document.documentElement.style.setProperty('--color1', black);
    document.documentElement.style.setProperty('--color2', white);

    let theme = JSON.parse(localStorage.getItem('themeKey') || '[]');
    var themeArray = {isDarkTheme: true,};
    theme[0] = themeArray
    localStorage.setItem('themeKey', JSON.stringify(theme));
}

function lightTheme() {
    document.documentElement.style.setProperty('--color1', white);
    document.documentElement.style.setProperty('--color2', black);

    let theme = JSON.parse(localStorage.getItem('themeKey') || '[]');
    var themeArray = {isDarkTheme: false,};
    theme[0] = themeArray
    localStorage.setItem('themeKey', JSON.stringify(theme));
}
