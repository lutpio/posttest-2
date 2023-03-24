if (!sessionStorage.getItem("info")) {
  window.location.href = "index.html";
}

let imageElement = document.getElementById("imageElement");
let data = sessionStorage.getItem("info");
data = JSON.parse(data);

let base64 = data.gambar;
imageElement.src = base64;

let nama = document.getElementById("Nama");
let kelamin = document.getElementById("Kelamin");
let kelas = document.getElementById("Kelas");
let penyakit = document.getElementById("Penyakit");
let alat = document.getElementById("Alat");
let alasan = document.getElementById("Alasan");
let email = document.getElementById("Email");
let mengikuti = document.getElementById("Mengikuti");
let divisi = document.getElementById("Divisi");

nama.value = data.nama;
kelamin.value = data.kelamin;
kelas.value = data.kelas;
penyakit.value = data.penyakit;
alat.value = data.alat;
alasan.value = data.alasan;
email.value = data.email;
mengikuti.value = data.mengikuti;
divisi.value = data.divisi;
