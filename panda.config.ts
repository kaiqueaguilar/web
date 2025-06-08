import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  watch: true,
  include: ["src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["src/styles"],
  jsxFramework: "react",
  outdir: "src/styles",
  globalFontface: {
    Geist: {
      src: "url(https://fonts.gstatic.com/s/geist/v3/gyByhwUxId8gMEwcGFU.woff2) format('woff2')",
      fontDisplay: "swap",
    },
    "Geist Mono": {
      src: "url(https://fonts.gstatic.com/s/geistmono/v3/or3nQ6H-1_WfwkMZI_qYFrcdmg.woff2) format('woff2')",
      fontDisplay: "swap",
    },
  },
  globalCss: {
    extend: {
      body: {
        fontFamily: "sans",
      },
    },
  },
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: {
            value: "Geist, sans-serif",
          },
          mono: {
            value: "Geist Mono, monospace",
          },
        },
        zIndex: {
          hide: {
            value: -1,
          },
          base: {
            value: 0,
          },
          docked: {
            value: 10,
          },
          dropdown: {
            value: 1000,
          },
          sticky: {
            value: 1100,
          },
          overlay: {
            value: 1300,
          },
          modal: {
            value: 1400,
          },
          popover: {
            value: 1500,
          },
          toast: {
            value: 1700,
          },
          tooltip: {
            value: 1800,
          },
        },
      },
    },
  },
});
