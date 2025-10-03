// @ts-check
import { defineConfig } from 'astro/config';
import { webcore } from 'webcoreui/integration'

// https://astro.build/config
export default defineConfig({
    integrations: [webcore()],
    site: 'https://sebasroldanm.github.io',
    base: '/astro-utils/'
});
