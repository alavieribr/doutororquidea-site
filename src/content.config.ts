import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    n: z.number(),
    title: z.string(),
    curto: z.string(),
    hint: z.string(),
    tag: z.enum(['Urgente', 'Emergência', 'Atenção', 'Observar']),
    description: z.string(),
    sinal: z.string(),
    hoje: z.string(),
    prazo: z.string(),
    fontes: z.array(z.tuple([z.string(), z.string()])),
  }),
});

export const collections = { guias };
