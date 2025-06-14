function kirimWhatsApp() {
  const game = document.getElementById("game").value;
  const jumlah = document.getElementById("jumlah").value;
  const nomor = "6281234567890"; // Ganti dengan nomor WhatsApp kamu
  const pesan = `Halo, saya ingin top up ${game} dengan nominal ${jumlah}`;
  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}
