fl=1
var pilihan=document.getElementById('ketolak')
function f1()
{
alert("Makasih yaaa... Semoga hubungan kita bisa harmonis... :) ")}
function f(){
if(fl==1)
{
alert('berhasil')
pilihan.style.marginTop=90
pilihan.style.marginLeft=500
fl=2
}
else if(fl==2)
{
pilihan.style.top=90
pilihan.style.left=50
fl=3
}
else if(fl==3)
{
pilihan.style.top=235
pilihan.style.left=360
fl=1
}
}