/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "tmdb-banner":
          "url('https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_BrandBanner_1920x425.jpg')",
        "tmdb-banner-fade":
          "linear-gradient(180deg, rgba(37, 37, 37, 0)0%, rgba(8, 8, 8, 0.7) 100%)",
        "netflix-background": "url('/src/assets/login-background.jpg')",
      },
    },
  },
  plugins: [],
};
