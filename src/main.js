import './js/modal.js';
import './js/header.js';
import './js/hero.js';
import './js/my-projects.js';
import './js/faq.js';
import './js/reviews.js';
import './js/work-together.js';
import './js/tech-skills.js';

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/js-avengers/', 
    build: {
      rollupOptions: {
      external: ['fsevents'],
    },
    outDir: 'dist'
    }
})



