/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "test-1": " #6f81e7",

        "test-2": "#fb6340 ",

        "test-3": "#2dce89 ",

        "test-4": "#11cdef ",

        "test-5": "#f64367 ",

        "test-6": "#344767 ",

        "test-7": "#fb6340 ",

        "test-8": "#2bd1f0 ",

        "test-9": "#344767 ",

        "test-10": "#5e72e4 ",

        "test-11": "#768199 ",

        "test-12": "#66738a ",

        "test-13": "#f8f9fa ",

        "test-14": "#6e6ae4",

        "test-15": "#f5365c",

        "test-16": "#2dce89",

        "test-17": "#fb6340",

        "test-18": "#b1adf7",

        "test-19": "#11a2ef",

        "test-20": "#2dce95",

        "test-21": "#f6474e",

        "test-22": "#6dd631",

        "test-23": "#11cdef",

        "test-24": "#f3f6f7",

        
      },
    },
  },
  plugins: [],
};
