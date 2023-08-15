let isDarkTheme = true;

function setTheme(){
    if(isDarkTheme){
        setLightTheme();
        isDarkTheme = false
    }else{
        setDarkTheme();
        isDarkTheme = true
    }
}

function setLightTheme() {
    document.documentElement.style.setProperty('--principal-color', '#10395C');
    document.documentElement.style.setProperty('--principal-dark', '#1E72B9');
    document.documentElement.style.setProperty('--dark', '#000000');
    document.documentElement.style.setProperty('--light', '#000000');  
    document.documentElement.style.setProperty('--light-grey', '#212121'); 
    document.documentElement.style.setProperty('--dark-grey', '#e8e8e8');

    document.getElementById("themeIcon").src="./images/darkIcon.png"
    document.getElementById("gitLink").src="./images/darkGitIcon.png"
    document.getElementById("instaLink").src="./images/darkInstaIcon.png"
    document.getElementById("linkedinLink").src="./images/darkLinkedinIcon.png"
}

function setDarkTheme() {
    document.documentElement.style.setProperty('--principal-color', '#1E72B9');
    document.documentElement.style.setProperty('--principal-dark', '#10395C');
    document.documentElement.style.setProperty('--dark', '#z');
    document.documentElement.style.setProperty('--light', '#ffffff');  
    document.documentElement.style.setProperty('--light-grey', '#e8e8e8'); 
    document.documentElement.style.setProperty('--dark-grey', '#212121');

    document.getElementById("themeIcon").src="./images/lightIcon.png"
    document.getElementById("gitLink").src="./images/lightGitIcon.png"
    document.getElementById("instaLink").src="./images/lightInstaIcon.png"
    document.getElementById("linkedinLink").src="./images/lightLinkedinIcon.png"
}
