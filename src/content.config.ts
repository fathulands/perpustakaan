import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const koleksi = defineCollection({
  loader: glob({ base: './src/content/koleksi', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    judul: z.string(),
    rak: z.enum(['sistem-operasi', 'buku', 'perangkat-lunak', 'ruang-pameran']),
    ringkasan: z.string(),
    tanggal: z.coerce.date(),
    tag: z.array(z.string()).default([]),
    nilai: z.number().min(1).max(5).optional(),
    tautan: z.string().url().optional(),
    draf: z.boolean().default(false),
  }),
});

export const collections = { koleksi };
