import { getCollection, type CollectionEntry } from 'astro:content';

export type Item = CollectionEntry<'koleksi'>;

/** Semua tulisan yang bukan draf, terbaru di atas. */
export async function ambilKoleksi(): Promise<Item[]> {
  const semua = await getCollection('koleksi', ({ data }) => !data.draf);
  return semua.sort((a, b) => b.data.tanggal.valueOf() - a.data.tanggal.valueOf());
}

/** Nomor induk per rak: tulisan paling lama dapat nomor 1. */
export function nomorInduk(item: Item, semua: Item[]): number {
  const serak = semua
    .filter((i) => i.data.rak === item.data.rak)
    .sort((a, b) => a.data.tanggal.valueOf() - b.data.tanggal.valueOf());
  return serak.findIndex((i) => i.id === item.id) + 1;
}
