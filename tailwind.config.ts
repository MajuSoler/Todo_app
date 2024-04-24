import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/components/*.{js,jsx,ts,tsx}',
        './app/pages/*.{js,jsx,ts,tsx}',
        './app/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config
