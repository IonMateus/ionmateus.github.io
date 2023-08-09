let isOpen = false

//windowMoreOptions

function ChangeMoreOptions(){
    if(isOpen){
        document.getElementById("windowMoreOptions").style.display = "none"
        isOpen = !isOpen
    }else{
        document.getElementById("windowMoreOptions").style.display = "block"
        isOpen = !isOpen
    }
    
}