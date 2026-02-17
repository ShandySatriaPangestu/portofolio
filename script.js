let p = 0; // index project saat ini

const projects = [
  { title: "Deteksi Perilaku Berisiko pada Pengemudi Roda Empat Menggunakan YOLO (You Only Look Once) v10 untuk Meningkatkan Keamanan Berkendara", pdf: "assets/pdf/server-room-monitoring.pdf" },
  { title: "SIMRS Backup System", pdf: "PORTOFOLIO/project/skripsi.pdf" },
  { title: "Network Redesign", pdf: "assets/pdf/network-redesign.pdf" },
  { title: "Telegram Alert System", pdf: "assets/pdf/telegram-alert-system.pdf" },
  { title: "IT SOP Documentation", pdf: "assets/pdf/it-sop-documentation.pdf" }
];

function slideProject(n) {
  p = (p + n + projects.length) % projects.length;
  const slider = document.getElementById("projectSlider");

  // Build HTML
  let html = "";
  for (let i = 0; i < 3; i++) {
    let project = projects[(p + i) % projects.length];
    html += `
      <div class="project-card" onclick="window.open('${project.pdf}','_blank')">
        <h3>${project.title}</h3>
        <p>Click to view full documentation & implementation details.</p>
        <div class="view-more">View Project →</div>
      </div>
    `;
  }
  slider.innerHTML = html;

  // Animasi fade hanya saat klik tombol
  if (n !== 0) {
    slider.style.opacity = 0;
    slider.style.transform = "translateY(15px)";
    setTimeout(() => {
      slider.style.opacity = 1;
      slider.style.transform = "translateY(0px)";
    }, 50);
  }
}

// Panggil saat halaman siap
document.addEventListener("DOMContentLoaded", function () {
  slideProject(0);
});
