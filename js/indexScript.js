function modalImage(url) {
    console.log(url);
    let body=document.getElementsByTagName('body')[0].className="modal-active";
    let newImage = document.createElement('img');
    newImage.src = url;

    document.getElementById('img-modal').appendChild(newImage);
}

function closeModal() {
    let body=document.getElementsByTagName('body')[0].className='';
    document.getElementById('img-modal').innerHTML='';
}

function inactivity(){
    alert("lo sentimos, este botón esta temporalemente inactivo")
}