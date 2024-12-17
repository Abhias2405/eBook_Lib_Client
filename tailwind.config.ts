import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f7f6f3',
                    100: '#eae6dd',
                    200: '#d7d0c4',
                    300: '#bfb8aa',
                    400: '#9e9784',
                    500: '#7d776d',
                    600: '#655f57',
                    700: '#4f4b44',
                    800: '#3b3833',
                    900: '#2a2724',
                },
                accent: {
                    50: '#f5faf4',
                    100: '#e6f0e0',
                    200: '#cce0c4',
                    300: '#abc298',
                    400: '#8fa87a',
                    500: '#6e8c5e',
                    600: '#586f4a',
                    700: '#44573a',
                    800: '#34412c',
                    900: '#283221',
                },
                text: {
                    DEFAULT: '#3b3833',
                    light: '#6f6c68',
                    muted: '#9e9784',
                },
            },
            boxShadow: {
                subtle: '0 4px 6px rgba(0, 0, 0, 0.05)',
                medium: '0 6px 12px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
export default config;
