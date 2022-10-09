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
