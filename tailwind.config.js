module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideFromRight: 'slideFromRight 1s ease forwards',
        slideFromRightSlow: 'slideFromRight 1.5s ease forwards',
      },
    },
  },
  plugins: [require("daisyui")],
}
