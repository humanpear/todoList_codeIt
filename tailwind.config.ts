import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  screens: {
      // 모바일 우선 → md 이상부터 태블릿, lg 이상부터 데스크탑
      sm: "640px",
      md: "768px",
      lg: "1024px"
    },
  plugins: [],
} satisfies Config;
