/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            colors: {
                csr: {
                    orange: '#E85D04',
                    light: '#F48C06',
                    dark: '#DC2F02',
                    bg: '#FFF8F0',
                    darkBg: '#1A1A1A',
                    card: '#2A2A2A',
                    border: '#333333'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
