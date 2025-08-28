module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        logoPrimary: '#6C63FF',     
        logoSecondary: '#FF6584',   
        logoAccent: '#00BFA6',      
        logoDark: '#1F2937',        
      },
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
