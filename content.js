// Ambil semua halaman dan tombol navigasi
const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentPage = 0;

// Fungsi untuk menampilkan halaman tertentu
function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.style.transform = 'translateX(0)';
    } else if (i < index) {
      page.style.transform = 'translateX(-100%)'; // Pindahkan halaman sebelumnya ke kiri
    } else {
      page.style.transform = 'translateX(100%)'; // Pindahkan halaman berikutnya ke kanan
    }
  });
}

// Event listener untuk tombol "Next"
nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// Event listener untuk tombol "Previous"
prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// Tampilkan halaman pertama saat halaman dimuat
showPage(currentPage);
