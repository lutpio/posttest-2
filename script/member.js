if (!localStorage.getItem("info")) {
  window.location.href = "index.html";
}

let nama_p = document.getElementById("nama");
let data = localStorage.getItem("info");
data = JSON.parse(data);

let namaLOC = data.nama;

nama_p.innerHTML = `Selamat datang ${namaLOC}`;
