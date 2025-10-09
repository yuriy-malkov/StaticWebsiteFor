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
            tableOfContents: false,
            head: [
                { tag: 'link', attrs: { rel: 'icon', href: '/public/favicon.svg', type: 'image/svg+xml' } },
            ],
            sidebar: [
                { label: 'Home', link: '/' },
                { label: 'Ingredients', slug: 'ingredients/list' },
                { label: 'How to Cook', link: 'how-to/cook' },
                { label: 'Shop', link: 'shop/online' },
                { label: 'About Us', link: 'about/us' }
            ],
            components: {
                SiteTitle: './src/components/SiteTitle.astro',
                ThemeSelect: './src/components/BlankThemeSelect.astro',
                Pagination: './src/components/BlankPagination.astro'
            },
            customCss: ['./src/styles/custom.css'],
            social: [
                { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/grain_fusion_company' },
            ]
        }),
    ],
});
