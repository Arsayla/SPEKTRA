let completedLessons = 0;

/* =========================
   OPEN MODULE
========================= */

function openMakan() {
  document.getElementById("makanPage").classList.remove("hidden");

  showLesson(1);
}

function openMandi() {
  alert("Modul Aku Bisa Mandi sedang dipersiapkan 😊");
}

function openTidur() {
  alert("Modul Aku Bisa Tidur sedang dipersiapkan 😊");
}

/* =========================
   CLOSE MODULE
========================= */

function closePage() {
  document.getElementById("makanPage").classList.add("hidden");
}

/* =========================
   SHOW LESSON
========================= */

function showLesson(number) {
  if (number > completedLessons + 1) {
    alert("Selesaikan materi sebelumnya terlebih dahulu ya! 😊");

    return;
  }

  document.querySelectorAll(".material").forEach((item) => {
    item.classList.remove("active-material");
  });

  document.getElementById("lesson" + number).classList.add("active-material");

  document.querySelectorAll(".lesson").forEach((item) => {
    item.classList.remove("active");
  });

  const cards = document.querySelectorAll(".lesson");

  cards[number - 1].classList.add("active");
}

/* =========================
   COMPLETE LESSON
========================= */

function completeLesson(number) {
  completedLessons = number;

  const nextNumber = number + 1;

  if (nextNumber <= 4) {
    const nextCard = document.querySelectorAll(".lesson")[nextNumber - 1];

    nextCard.classList.remove("locked");

    nextCard.querySelector("span").textContent = "▶";

    showLesson(nextNumber);
  }
}

/* =========================
   QUIZ
========================= */

function answer(correct) {
  const message = document.getElementById("answerMessage");

  if (correct) {
    message.textContent = "🎉 Hebat! Jawaban kamu benar!";

    message.style.color = "#20855a";
  } else {
    message.textContent = "Coba lagi ya! 😊";

    message.style.color = "#d56a45";
  }
}

/* =========================
   QR
========================= */

let currentModule = "";

function scanQR(module) {
  currentModule = module;

  const modal = document.getElementById("qrModal");

  const text = document.getElementById("qrModule");

  let moduleName = "";

  if (module === "makan") {
    moduleName = "Aku Bisa Makan";
  } else if (module === "mandi") {
    moduleName = "Aku Bisa Mandi";
  } else {
    moduleName = "Aku Bisa Tidur";
  }

  text.textContent = "Scan QR Code untuk modul " + moduleName;

  modal.classList.remove("hidden");
}

function closeQR() {
  document.getElementById("qrModal").classList.add("hidden");
}

/* =========================
   START QR SCANNER
========================= */

function startScanner() {
  /*
        Untuk sementara hanya simulasi.

        Nanti bagian ini bisa
        menggunakan library QR Scanner
        seperti html5-qrcode.
    */

  alert("Kamera scanner akan dibuka untuk modul " + currentModule);
}
