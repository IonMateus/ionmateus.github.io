
window.onload = function(){
    LoadHeader()
    LoadFooter()
}


function LoadFooter(){

    fetch(' ./includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

}

function LoadHeader(){

    fetch(' ./includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

}