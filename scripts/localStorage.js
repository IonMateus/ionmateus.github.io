
window.onload=function(){
    if(!localStorage.getItem('cookies')){
        document.querySelector("#cookiesDiv").style.display = "block"
    }else{
        
    }
}

function DeclineCookies(){
    document.querySelector("#cookiesDiv").style.display = "none"
}

function createCookies(){
    let cookieCheck = JSON.parse(localStorage.getItem('cookies') || '[]');

    localStorage.setItem('cookies', JSON.stringify(cookieCheck));


    
}

