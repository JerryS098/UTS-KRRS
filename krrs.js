function submitprofil() {
    alert("Data anda berhasil disimpan!");
                                                                               
    var nimmahasiswa = document.getElementById("nim").value;
    var namamahasiswa = document.getElementById("nama").value;
    localStorage.setItem("nimvalue", nimmahasiswa);
    localStorage.setItem("namavalue", namamahasiswa);
}

function logout() {
    localStorage.clear();
}

function submitkrrs(){
    alert("Pilihan mata kuliah berhasil disimpan!");

    localStorage.setItem('Arraycheckboxvalue', JSON.stringify(listarraycheckbox));

    window.location.href='index1.html';
}
function loginkrrs() {
    var emailmahasiswa = document.getElementById("email").value;
    var passwordmahasiswa = document.getElementById('password').value;
    localStorage.setItem("emailvalue", emailmahasiswa);
    localStorage.setItem("passwordvalue", passwordmahasiswa);

    var mail = localStorage.getItem("emailvalue");
    var pass = localStorage.getItem("passwordvalue");

    var newmail = localStorage.getItem("newemailvalue");
    var newpass = localStorage.getItem("newpasswordvalue");

    if(mail == newmail && pass == newpass) {
        // window.open("index.html");
        window.location.href="index.html";
    } else {
        document.getElementById('akses').innerHTML='Login Failed!';
    }
}
