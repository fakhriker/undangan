const target = new Date("March 30, 2026 07:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  const h = Math.floor(diff / (1000 * 60 * 60 * 24));
  const j = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff % (1000*60*60))/(1000*60));
  const d = Math.floor((diff % (1000*60))/1000);

  document.getElementById("hari").innerHTML = h + " Hari";
  document.getElementById("jam").innerHTML = j + " Jam";
  document.getElementById("menit").innerHTML = m + " Menit";
  document.getElementById("detik").innerHTML = d + " Detik";

}, 1000);
