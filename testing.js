var setuju=document.getElementById('setuju')
var setuju1=document.getElementById('setuju1')
    if (setuju) {
        setuju.addEventListener('click', function(){
            alert('Terima Kasih, Karena Kamu Membuatku Bahagia')
        })
    }
var gagal=document.getElementById('gagal')
var gagal1=document.getElementById('gagal1')
    if(gagal){
        gagal.addEventListener('click', function(){
            setuju.classList.add('hilang')
            gagal.classList.add('hilang')
            setuju1.classList.remove('hilang')
            gagal1.classList.remove('hilang')
        })}
    if(setuju1){
        setuju1.addEventListener('click', function(){
            alert('Terima Kasih, Karena Kamu Membuatku Bahagia')
        })
    }
    if(gagal1){
        gagal1.addEventListener('click', function(){
            setuju.classList.remove('hilang')
            gagal.classList.remove('hilang')
            setuju1.classList.add('hilang')
            gagal1.classList.add('hilang')
        })
    }

var bg= document.getElementById('bg')
// lebar layar 
var lebar = window.innerWidth
// tinggi layar
var tinggi = window.innerHeight
// background image berdasarkna lebar layar
bg.style.backgroundImage = "url('https://source.unsplash.com/"+lebar+"x"+tinggi+"?rose')";

