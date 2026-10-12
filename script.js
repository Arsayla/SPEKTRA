function login() {
  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("E-mail dan password harus diisi.");

    return;
  }

  // Login berhasil
  window.location.href = "dashboard.html";
}

function signup() {
  const username = document.getElementById("username").value;

  const email = document.getElementById("signupEmail").value;

  const password = document.getElementById("signupPassword").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Semua data harus diisi.");

    return;
  }

  if (password !== confirmPassword) {
    alert("Password tidak sama.");

    return;
  }

  alert("Akun berhasil dibuat!");

  showLogin();
}
