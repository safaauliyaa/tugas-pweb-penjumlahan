alert ("Selamat Datang di Website ini");
function hanyaAngka1(evt){
    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

    return false;
    return true;
}
function hanyaAngka2(evt){
    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

    return false;
    return true;
}
function cek(){
    if(hitung.angka1.value == "" || hitung.angka2.value==""){
    alert("data kosong");
    exit;
    }
}
function tambah(){
    var button1
    cek();
    a=eval(hitung.angka1.value); 
    b=eval(hitung.angka2.value)
    c=a+b
    hitung.total.value = c;

    document.body.style.backgroundColor="green"
}