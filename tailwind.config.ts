import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fsi-light-green": "#2A863A",
        "fsi-dark-green": "#103A17",
        "fsi-gray": "#2A2B36",
      },
    },
  },
  plugins: [],
} satisfies Config;
