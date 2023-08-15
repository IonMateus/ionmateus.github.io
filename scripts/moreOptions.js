let isHide = true
function ShowMoreOptions(){
    if(isHide){
    let element = document.getElementById("moreOptionsDiv");
    element.style.display = "block"
    element.classList.toggle("moreOptionsDivStyle");
    isHide = false
    }else{
        HideMoreOptions()
        isHide = true
    }
}

function HideMoreOptions(){
    let element = document.getElementById("moreOptionsDiv");
    element.style.display = "none"
    element.classList.toggle("moreOptionsDivStyle");
}