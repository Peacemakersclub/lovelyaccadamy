import { createApp } from 'https://unpkg.com/tinacms@latest/dist/tinacms.es.js';
import config from '../tina/config.js';

const app = createApp({
  config,
});

app.start();
