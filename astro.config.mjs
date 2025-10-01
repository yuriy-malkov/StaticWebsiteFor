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
                { label: 'Information',
                items: [
                    { label: 'Ingredients', slug: 'ingredients/list' },
                    { label: 'How to Cook', slug: 'how-to/cook' },
                ]},
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
