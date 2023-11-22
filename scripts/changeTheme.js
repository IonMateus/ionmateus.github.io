
window.onload = function(){
    variavelAdquirida = JSON.parse(localStorage.getItem('themeKey'));
    if(variavelAdquirida != null){
        if(variavelAdquirida[0].isDarkTheme == false){lightTheme()}else{darkTheme}
    }
}


function changeTheme() {
    var theme = getComputedStyle(document.documentElement).getPropertyValue('--color1').trim(); 
    if(theme == "#fff"){darkTheme()}else{lightTheme()}
}

function darkTheme() {
    document.documentElement.style.setProperty('--color1', '#000');
    document.documentElement.style.setProperty('--color2', '#fff');

    let theme = JSON.parse(localStorage.getItem('themeKey') || '[]');
    var themeArray = {isDarkTheme: true,};
    theme[0] = themeArray
    localStorage.setItem('themeKey', JSON.stringify(theme));
}

function lightTheme() {
    document.documentElement.style.setProperty('--color1', '#fff');
    document.documentElement.style.setProperty('--color2', '#000');

    let theme = JSON.parse(localStorage.getItem('themeKey') || '[]');
    var themeArray = {isDarkTheme: false,};
    theme[0] = themeArray
    localStorage.setItem('themeKey', JSON.stringify(theme));
}
