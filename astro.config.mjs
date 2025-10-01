// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Grain Fusion Company',
            description: 'Simple, wholesome overnight oats.',
            pagefind: false,
            sidebar: [
                { label: 'Home', link: '/' },
                { label: 'Ingredients',
                items: [
                    { label: 'Amaranth', slug: 'ingredients/amaranth' },
                    { label: 'Barley', slug: 'ingredients/barley' },
                    { label: 'Chia Seeds', slug: 'ingredients/chia' },
                    { label: 'Flax Seeds', slug: 'ingredients/flax' },
                    { label: 'Hemp Seeds', slug: 'ingredients/hemp' },
                    { label: 'Oats', slug: 'ingredients/oats' },
                    { label: 'Quinoa', slug: 'ingredients/quinoa' },
                    { label: 'Sesame Seeds', slug: 'ingredients/sesame' },
                    { label: 'Ingredients', slug: 'ingredients/list' }
                ]},
                { label: 'How to Cook', link: 'how-to/cook' }
            ],
            components: {
                SiteTitle: './src/components/SiteTitle.astro',
                ThemeSelect: './src/components/BlankThemeSelect.astro'
            },
            customCss: ['./src/styles/custom.css'],
            social: [
                { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/grain_fusion_company' },
            ]
        }),
    ],
});
