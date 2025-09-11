import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./resources/js/**/*.js",
        "./app/Livewire/**/*.php",
        "./vendor/livewire/**/*.blade.php"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    primary: '#6C5CE7',
                    accent: '#00D1B2',
                    bg: '#0B1020',
                    text: '#F8FAFC'
                }
            },
            borderRadius: { '2xl': '1.25rem' }
        },
    },

    plugins: [forms],
};
