
function CloseHeaderMoreOptions(){
  let headerLinks = document.getElementById("headerLinks")
  headerLinks.style.display = 'none'
  document.getElementById("OpenHeaderMoreOptions").style.display = "block"
}

function OpenHeaderMoreOptions(){
  let headerLinks = document.getElementById("headerLinks")
  headerLinks.style.display = 'block'
  headerLinks.style.display = "flex"
  document.getElementById("OpenHeaderMoreOptions").style.display = "none"
}

function ChangeHeaderMoreOptions(){
  let headerLinks = document.getElementById("headerLinks")
  let status = headerLinks.style.display
  if(status == 'flex'){
    headerLinks.style.display = 'none'
    document.getElementById("OpenHeaderMoreOptions").style.display = "block"  
  }else{
    headerLinks.style.display = "flex"
    document.getElementById("OpenHeaderMoreOptions").style.display = "none"
  }
}