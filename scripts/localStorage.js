
window.onload=function(){
    if(!localStorage.getItem('cookies')){
        document.querySelector("#cookiesDiv").style.display = "block"
    }
}

function DeclineCookies(){
    document.querySelector("#cookiesDiv").style.display = "none"
}

function createCookies(){
    let cookieCheck = JSON.parse(localStorage.getItem('cookies') || '[]');

    localStorage.setItem('cookies', JSON.stringify(cookieCheck));

    document.querySelector("#cookiesDiv").style.display = "none"
}

