let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  // Sembunyikan semua slide
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Inisialisasi slide pertama
showSlide(currentSlide);

// Ganti slide setiap 5 detik dengan fade effect
setInterval(nextSlide, 3000);

let currentSlide2 = 0;
const slides2 = document.querySelectorAll(".slide-2");

function showSlide2(index) {
  // Sembunyikan semua slide
  slides2.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    }
  });
}

function nextSlide2() {
  currentSlide2 = (currentSlide2 + 1) % slides.length;
  showSlide2(currentSlide2);
}

// Inisialisasi slide pertama
showSlide2(currentSlide2);

// Ganti slide setiap 5 detik dengan fade effect
setInterval(nextSlide2, 3000);

let currentSlide3 = 0;
const slides3 = document.querySelectorAll(".slide-3");

function showSlide3(index) {
  // Sembunyikan semua slide
  slides3.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    }
  });
}

function nextSlide3() {
  currentSlide3 = (currentSlide3 + 1) % slides.length;
  showSlide3(currentSlide3);
}

// Inisialisasi slide pertama
showSlide3(currentSlide3);

// Ganti slide setiap 5 detik dengan fade effect
setInterval(nextSlide3, 3000);

let currentSlide4 = 0;
const slides4 = document.querySelectorAll(".slide-4");

function showSlide4(index) {
  // Sembunyikan semua slide
  slides4.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    }
  });
}

function nextSlide4() {
  currentSlide4 = (currentSlide4 + 1) % slides.length;
  showSlide4(currentSlide4);
}

// Inisialisasi slide pertama
showSlide4(currentSlide4);

// Ganti slide setiap 5 detik dengan fade effect
setInterval(nextSlide4, 3000);

let currentSlide5 = 0;
const slides5 = document.querySelectorAll(".slide-5");

function showSlide5(index) {
  // Sembunyikan semua slide
  slides5.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    }
  });
}

function nextSlide5() {
  currentSlide5 = (currentSlide5 + 1) % slides.length;
  showSlide5(currentSlide5);
}

// Inisialisasi slide pertama
showSlide5(currentSlide5);

// Ganti slide setiap 5 detik dengan fade effect
setInterval(nextSlide5, 3000);

function toggleText(button) {
    const textElement = button.nextElementSibling;
    const isVisible = textElement.style.opacity === "1";

    // Tampilkan atau sembunyikan teks
    textElement.style.opacity = isVisible ? "0" : "1";

    // Tambahkan efek naik jika belum aktif
    button.style.transform = isVisible ? "translateY(0)" : "translateY(-10px)";
  }


  let currentSlide6 = 0;
  const slides6 = document.querySelectorAll(".slide-6");
  
  function showSlide6(index) {
    // Sembunyikan semua slide
    slides6.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("opacity-0");
        slide.classList.add("opacity-100");
      } else {
        slide.classList.remove("opacity-100");
        slide.classList.add("opacity-0");
      }
    });
  }
  
  function nextSlide6() {
    currentSlide6 = (currentSlide6 + 1) % slides.length;
    showSlide6(currentSlide6);
  }
  
  // Inisialisasi slide pertama
  showSlide6(currentSlide6);
  
  // Ganti slide setiap 5 detik dengan fade effect
  setInterval(nextSlide6, 3000);
  
  function toggleText(button) {
      const textElement = button.nextElementSibling;
      const isVisible = textElement.style.opacity === "1";
  
      // Tampilkan atau sembunyikan teks
      textElement.style.opacity = isVisible ? "0" : "1";
  
      // Tambahkan efek naik jika belum aktif
      button.style.transform = isVisible ? "translateY(0)" : "translateY(-10px)";
    }

  // JavaScript untuk kontrol musik
  const musicOn = document.getElementById("musicOn");
  const musicOff = document.getElementById("musicOff");
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Fungsi untuk menyalakan musik
  function turnMusicOn() {
    backgroundMusic.play(); // Putar musik
    musicOn.classList.add("hidden"); // Sembunyikan tombol On
    musicOff.classList.remove("hidden"); // Tampilkan tombol Off
  }

  // Fungsi untuk mematikan musik
  function turnMusicOff() {
    backgroundMusic.pause(); // Hentikan musik
    musicOff.classList.add("hidden"); // Sembunyikan tombol Off
    musicOn.classList.remove("hidden"); // Tampilkan tombol On
  }

  // Tambahkan event listener ke tombol
  musicOn.addEventListener("click", turnMusicOn);
  musicOff.addEventListener("click", turnMusicOff);
  
  // Elemen pop-up
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Buka pop-up
openPopup.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Tutup pop-up
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Tutup pop-up saat klik di luar area konten
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

/// Mengatur tanggal akhir hitungan mundur
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Fungsi untuk memperbarui hitungan mundur setiap detik
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Hitung hari, jam, menit, dan detik
  const timeValues = {
    "Hari": Math.floor(distance / (1000 * 60 * 60 * 24)),
    "Jam": Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    "Menit": Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    "Detik": Math.floor((distance % (1000 * 60)) / 1000),
  };

  // Tampilkan hasil ke elemen masing-masing
  document.querySelectorAll("#countdown-timer .relative").forEach((el) => {
    const label = el.dataset.label;
    el.querySelector(".value").textContent = timeValues[label].toString().padStart(2, "0");
  });

  // Ketika hitungan selesai
  if (distance < 0) {
    clearInterval(timer);
    document.querySelectorAll("#countdown-timer .value").forEach((el) => {
      el.textContent = "00";
    });
  }
}, 1000);

// Fungsi toggle video
const mediaContainer = document.getElementById("media-container");
const videoToggle = document.getElementById("video-toggle");
const video = document.getElementById("my-video");

videoToggle.addEventListener("click", () => {
  if (video.classList.contains("hidden")) {
    video.classList.remove("hidden");
    videoToggle.classList.add("hidden");
    video.play();
  } else {
    video.pause();
    video.classList.add("hidden");
    videoToggle.classList.remove("hidden");
  }
});

function showText(button, text) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple-effect bg-amber-400';
  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}