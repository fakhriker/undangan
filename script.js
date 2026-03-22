/* SCROLL ANIMATION */
const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.6 });

slides.forEach(slide => observer.observe(slide));


/* COUNTDOWN */
const target = new Date("March 30, 2026 07:00:00").getTime();

let mode = 0;

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  const h = Math.floor(diff / (1000 * 60 * 60 * 24));
  const j = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff % (1000*60*60))/(1000*60));
  const d = Math.floor((diff % (1000*60))/1000);

  const hari = document.getElementById("cd-hari");
  const jam = document.getElementById("cd-jam");
  const menit = document.getElementById("cd-menit");
  const detik = document.getElementById("cd-detik");

  hari.innerHTML = h + " Hari";
  jam.innerHTML = j + " Jam";
  menit.innerHTML = m + " Menit";
  detik.innerHTML = d + " Detik";

}, 1000);


/* MODE TAMPIL BERGANTIAN */
setInterval(() => {
  const items = document.querySelectorAll(".cd-item");

  items.forEach(i => i.style.display = "none");

  if (mode === 0) items[0].style.display = "block";
  if (mode === 1) items[1].style.display = "block";
  if (mode === 2) items[2].style.display = "block";
  if (mode === 3) items[3].style.display = "block";

  if (mode === 4) {
    items.forEach(i => i.style.display = "none");
  }

  mode++;
  if (mode > 4) mode = 0;

}, 1000);
