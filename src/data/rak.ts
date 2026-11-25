export type RakSlug = 'sistem-operasi' | 'buku' | 'perangkat-lunak' | 'ruang-pameran';

export interface Rak {
  slug: RakSlug;
  nama: string;
  kode: string;
  deskripsi: string;
  warna: string;
}

export const daftarRak: Rak[] = [
  {
    slug: 'sistem-operasi',
    nama: 'Rak Sistem Operasi',
    kode: '005.43',
    deskripsi: 'Catatan dan review OS hasil distro hopping.',
    warna: '#7a3b2e',
  },
  {
    slug: 'buku',
    nama: 'Rak Buku',
    kode: '028.1',
    deskripsi: 'Review buku yang sudah selesai dibaca.',
    warna: '#2f4a3a',
  },
  {
    slug: 'perangkat-lunak',
    nama: 'Rak Perangkat Lunak',
    kode: '005.3',
    deskripsi: 'Review software dan tools yang pernah dipakai.',
    warna: '#2c3e5c',
  },
  {
    slug: 'ruang-pameran',
    nama: 'Ruang Pameran',
    kode: '005.1',
    deskripsi: 'Aplikasi dan proyek buatan sendiri.',
    warna: '#8a6a24',
  },
];

export const cariRak = (slug: string) => daftarRak.find((r) => r.slug === slug)!;

export const formatTanggal = (d: Date) =>
  d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
