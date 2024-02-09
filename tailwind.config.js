/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        my_Tomato: "hsl(4, 100%, 67%)",
        my_Dark_Slate_Grey: "hsl(234, 29%, 20%) ",
        my_Charcoal_Grey: "hsl(235, 18%, 26%)",
        my_Grey: "hsl(231, 7%, 60%)",
        my_White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
