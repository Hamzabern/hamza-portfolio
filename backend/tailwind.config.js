import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.js",
    "./app/Livewire/**/*.php",
    "./vendor/livewire/**/*.blade.php"
  ],
  theme: { extend: {} },
  plugins: [],
};
