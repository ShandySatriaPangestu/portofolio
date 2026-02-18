let p = 0; // index project saat ini

const projects = [
  { title: "Deteksi Perilaku Berisiko pada Pengemudi Roda Empat Menggunakan YOLO (You Only Look Once) v10 untuk Meningkatkan Keamanan Berkendara", pdf: "https://drive.google.com/file/d/1ZVMbEdrl5FsFMd9WOUL86wUb4-RAs4K2/view?usp=sharing" },
  { title: "SIMRS Backup System", pdf: "PORTOFOLIO/project/skripsi.pdf" },
  { title: "Network Redesign", pdf: "assets/pdf/network-redesign.pdf" },
  { title: "Telegram Alert System", pdf: "assets/pdf/telegram-alert-system.pdf" },
  { title: "IT SOP Documentation", pdf: "assets/pdf/it-sop-documentation.pdf" }
];

const slider = document.getElementById("projectSlider");

// Fungsi render project
function slideProject(n) {
  p = (p + n + projects.length) % projects.length;

  let html = "";
  // Tampilkan 3 project secara “window”
  for (let i = 0; i < 3; i++) {
    let project = projects[(p + i) % projects.length];
    html += `
      <div class="project-card" onclick="window.open('${project.pdf}','_blank')" style="cursor:pointer;">
        <h3>${project.title}</h3>
        <p>Click to view full documentation & implementation details.</p>
        <div class="view-more">View Project →</div>
      </div>
    `;
  }

  slider.innerHTML = html;

  // Animasi fade smooth
  slider.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  slider.style.opacity = 0;
  slider.style.transform = "translateY(15px)";

  setTimeout(() => {
    slider.style.opacity = 1;
    slider.style.transform = "translateY(0px)";
  }, 50);
}

// Init saat halaman siap
document.addEventListener("DOMContentLoaded", function () {
  slideProject(0);
});
//amplop
const envelope = document.getElementById("envelope");
const btn = document.getElementById("open-envelope-btn");
const wrapper = document.getElementById("wrapper"); // main portofolio
const envelopeWrapper = document.getElementById("envelope-wrapper");

// awal: sembunyikan main content
wrapper.style.display = "none";

btn.addEventListener("click", () => {
  envelope.classList.add("open");

  // tunggu animasi flap selesai sebelum tampilkan portofolio
  setTimeout(() => {
    wrapper.style.display = "block";  // tampilkan main content
    wrapper.style.opacity = 0;
    wrapper.style.transition = "opacity 1s ease";
    setTimeout(() => wrapper.style.opacity = 1, 50);

    // sembunyikan envelope
    envelopeWrapper.style.display = "none";
  }, 1000); // sama dengan durasi animasi flap
});







