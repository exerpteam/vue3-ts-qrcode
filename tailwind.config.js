const tokens = require('./tokens/tokens');

const colorTheme = {};
for (const [key, value] of Object.entries(tokens)) {
  for (const [subKey, subValue] of Object.entries(value)) {
    const colorKey = subKey.replace(' ', '-').toLowerCase();
    colorTheme[colorKey] = subValue.value;
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: colorTheme
      }
    },
  },
  plugins: [],
}