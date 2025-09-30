// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Grain Fusion Company',
            description: 'Simple, wholesome overnight oats.',
            sidebar: [
                { label: 'Information',
                items: [
                    { label: 'Ingredients', slug: 'ingredients/list' },
                    { label: 'How to Cook', slug: 'how-to/cook' },
                ]},
            ],
        }),
    ],
});
