// form-start

document.getElementById("formulir").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("nama");
  let kelamin = document.getElementById("kelamin");
  let kelas = document.getElementById("kelas");
  let penyakit = document.getElementById("penyakit");
  let alat = document.getElementById("alat");
  let alasan = document.getElementById("alasan");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let mengikuti;
  let divisi = [];
  // mengikuti-start

  if (document.getElementById("PernahIkut").checked) {
    mengikuti = document.getElementById("PernahIkut").value;
  } else {
    mengikuti = document.getElementById("tidakIkut").value;
  }
  // mengikuti-end

  // divisi-start

  let tertarik = document.getElementsByName("divisi");
  for (let i = 0; i < tertarik.length; i++) {
    if (tertarik[i].checked == true) {
      divisi.push(tertarik[i].value);
    }
  }
  // divisi-end

  // null-start
  if (divisi.length === 0) {
    divisi = "kosong";
  }
  if (alat == "") {
    alat = "kosong";
  }
  // null-end

  // image-start
  let imageInput = document.getElementById("formFile");

  let file = imageInput.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (event) {
    let base64 = event.target.result;
    let LOCnama = nama.value.trim();
    let LOCkelamin = kelamin.value.trim();
    let LOCkelas = kelas.value.trim();
    let LOCpenyakit = penyakit.value.trim();
    let LOCalat = alat.value.trim();
    let LOCalasan = alasan.value.trim();
    let LOCemail = email.value.trim();
    let LOCpassword = password.value.trim();
    // image-end

    let info = {
      nama: LOCnama,
      kelamin: LOCkelamin,
      kelas: LOCkelas,
      penyakit: LOCpenyakit,
      mengikuti: mengikuti,
      divisi: divisi,
      alat: LOCalat,
      alasan: LOCalasan,
      gambar: base64,
      email: LOCemail,
      password: LOCpassword,
    };

    sessionStorage.setItem("info", JSON.stringify(info));
    window.location = "confirm.html";
  };
});

// form-end

// login-start

// login-end

// gambar

// let imageInput = document.getElementById("imageInput");
// let saveButton = document.getElementById("saveButton");

// saveButton.addEventListener("click", function () {
//   let file = imageInput.files[0];
//   let reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function (event) {
//     let base64 = event.target.result;
//   };
// });

// let imageElement = document.getElementById("imageElement");
// let base64 = localStorage.getItem("myImage");
// imageElement.src = base64;

// gambar
