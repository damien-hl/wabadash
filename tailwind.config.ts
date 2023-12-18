import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Config>{
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: `rgb(var(--clr-background))`,
        foreground: `rgb(var(--clr-foreground))`,
        primary: `rgb(var(--clr-primary))`,
        secondary: `rgb(var(--clr-secondary))`
      },
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
}

