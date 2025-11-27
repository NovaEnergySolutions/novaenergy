// tailwind.config.js
module.exports = {
  content: [
    "./*.html", // 루트의 모든 html
    "./**/*.html", // 서브폴더까지 전부
    "./script.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
