document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();

  let emailLog = document.getElementById("email_login").value;
  let passwordLog = document.getElementById("password_login").value;

  if (!localStorage.getItem("info")) {
    let data = sessionStorage.getItem("info");
    data = JSON.parse(data);

    let locEmail = data.email;
    let locPassword = data.password;

    if (locEmail === emailLog && locPassword === passwordLog) {
      alert("Berhasil Login");

      let info = {
        nama: data.nama,
        email: emailLog,
        password: passwordLog,
      };

      localStorage.setItem("info", JSON.stringify(info));
      window.location = "member.html";
    } else {
      alert("Email / Password salah");
    }
  } else {
    let data = localStorage.getItem("info");
    data = JSON.parse(data);

    if (data.email === emailLog && data.password === passwordLog) {
      alert("Berhasil Login");
      window.location = "member.html";
    }
  }
});
