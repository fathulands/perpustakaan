// Edit data profil kamu di sini. Field yang dikosongkan ('') tidak akan ditampilkan.

export const profil = {
  nama: 'Fathul Ansori',
  nomorAnggota: '0001',
  anggotaSejak: '2026',
  pekerjaan: '',
  kuliah: '',
  // Kalimat singkat untuk kotak di halaman depan.
  sapaan: 'Halo, saya Fathul. Perpustakaan ini tempat saya menyimpan catatan tentang hal-hal yang saya coba dan pelajari.',
  // Paragraf lengkap untuk halaman Pustakawan. Satu string = satu paragraf.
  paragraf: [
    'Saya selalu berpikir kemana tulisan saya akan ditampilkan dan akhirnya saya membuat ini.',
    'Ini adalah minat saya saat ini semoga bisa terus berjalan dan menemukan hal baru yang menyenangkan.',
  ],
  minat: ['Sistem operasi', 'Buku', 'Software', 'Ngoding'],
};

// Isi url untuk tautan yang mau ditampilkan. Yang url-nya kosong otomatis disembunyikan.
// Untuk email pakai format 'mailto:alamat@email.com'.
export const tautan = [
  { label: 'GitHub', url: 'https://github.com/fathulands' },
  { label: 'Threads', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'Email', url: '' },
  { label: 'Instagram', url: '' },
].filter((t) => t.url !== '');
