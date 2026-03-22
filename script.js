function start() {
  document.getElementById("music").play();
}

/* COUNTDOWN */
const targetTanggal = new Date("March 30, 2026 07:00:00").getTime();

setInterval(function() {
  const sekarang = new Date().getTime();
  const selisih = targetTanggal - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = hari;
  document.getElementById("jam").innerHTML = jam;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("detik").innerHTML = detik;

  if (selisih < 0) {
    document.getElementById("countdown").innerHTML = "Acara Dimulai 🎉";
  }
}, 1000);
