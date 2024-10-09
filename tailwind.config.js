/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      'gray-12': '#1A1A1A',
      'gray-11': '#272727',
      'gray-10': '#3D3D3D',
      'gray-09': '#525252',
      'gray-08': '#707070',
      'gray-07': '#949494',
      'gray-06': '#A4A4A4',
      'gray-05': '#C0C0C0',
      'gray-04': '#E1E1E1',
      'gray-03': '#EDEDED',
      'gray-02': '#F5F5F5',
      'gray-01': '#FBFBFB',
      'blue-01': '#2068E1',
      'blue-02': '#BCE0FF',
      'blue-03': '#E3F3FF',
      'yellow-01': '#F6B812',
      'yellow-02': '#FDF7C0',
      'yellow-03': '#FEFCE5',
    },
    boxShadow: {
      DEFAULT: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
      md: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gray':
          'linear-gradient(0deg, rgba(51, 51, 51, 0.70) 0%, rgba(51, 51, 51, 0.14) 54.69%, rgba(51, 51, 51, 0.00) 80.21%, rgba(51, 51, 51, 0.00) 100%)',
      },
      spacing: {
        3.5: '0.875rem',
        4.5: '1.125rem',
        9.5: '2.375rem',
        15: '3.75rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      flex: {
        embla: '0 0 87%',
        embla1: '0 0 100%',
        embla2: '0 0 168px',
      },
    },
  },
  plugins: [],
};
