/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-mobile": 'url("/bg-shorten-mobile.svg")',
        "shorten-desktop": 'url("/bg-shorten-desktop.svg")',
        "bg-boost-mobile": 'url("/bg-boost-mobile.svg")',
        "bg-boost-desktop": 'url("/bg-boost-desktop.svg")',
      },
      colors: {
        tint: generateTints("#63002a"),
        overview: generateTints("#a05ae2"),
        location: generateTints("#2779a7"),
        creation: generateTints("#1b8a47"),
        danger: generateTints("#ff1f00"),
        warning: generateTints("#C44900"),
        settings: generateTints("#e2883b"),
      },
      fontSize: {
        h1: "5rem", // 80px
        h2: "2.625rem", // 42px
        h3: "2.5rem", // 40px
        h4: "1.75rem", // 28px
        h5: "1.375rem", // 22px
        h6: "1.25rem", // 20px
        lg: "1.125rem", // 18px
        md: "1rem", // 16px
        sm: "0.9375rem", // 15px
      },
      lineHeight: {
        h1: "5.625rem", // 90px
        h2: "3rem", // 48px
        h3: "3rem", // 48px
        h4: "3rem", // 48px
        h5: "2.0625rem", // 33px
        h6: "1.875rem", // 30px
        lg: "1.875rem", // 30px
        md: "1.5rem", // 24px
        sm: "1.4375rem", // 23px
      },
      maxWidth: {
        container: "1110px",
      },
      screens: {
        xl: "1110px",
      },
    },
  },
  plugins: [],
};

type HexString = `#${string}`;

/**
 * Generate tints for the given colour.
 * Source: https://maketintsandshades.com/about#example-calculation
 * @param hex the origin colour
 */
function generateTints(hex: HexString) {
  const rgb = hex2rgb(hex);
  const tints = [];

  for (let i = 0; i < 11; i++) {
    // i = % tint, so i=1 -> 10% tint, i=20 -> 20% tint, etc
    const r = Math.floor(rgb.r + (255 - rgb.r) * i * 0.1);
    const g = Math.floor(rgb.g + (255 - rgb.g) * i * 0.1);
    const b = Math.floor(rgb.b + (255 - rgb.b) * i * 0.1);
    tints.push(`rgb(${r},${g},${b})`);
  }

  return tints as ColourSet;
}

/**
 * Convert a hex colour to rgb.
 * @param hex the hexadecimal colour (e.g. #fe23ad)
 */
function hex2rgb(hex: HexString) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

/**
 * Convert an rgb string `rgb(0,0,0)` (no spaces) into a hex value.
 */
export function rgbStringToHex(rgbString: string) {
  const rgb = rgbString.substring(4, rgbString.length - 1);
  const values = rgb.split(",").map((v) => parseInt(v, 10));
  return rgbToHex(values[0], values[1], values[2]);
}

/**
 * Convert RGB values into a hex string.
 * Source: https://stackoverflow.com/a/19765382/2822450
 */
function rgbToHex(red: number, green: number, blue: number) {
  // eslint-disable-next-line no-bitwise
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
}

export type ColourSet = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];
