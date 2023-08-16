let isHide = true
function ShowMoreOptions(){
    if(isHide){
    let element = document.getElementById("moreOptionsDiv");
    element.style.display = "block"
    element.classList.toggle("moreOptionsDivStyle");
    isHide = false
    }else{
        HideMoreOptions()
    }
}

function HideMoreOptions(){
    let element = document.getElementById("moreOptionsDiv");
    if(element.style.display != "none"){
        element.classList.toggle("moreOptionsDivStyle");
    }
    element.style.display = "none"
    isHide = true
}