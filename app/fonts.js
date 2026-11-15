import localFont from 'next/font/local';

// وزیرمتن در دو زیرمجموعه: عربی/فارسی برای متن اصلی و لاتین برای حروف انگلیسی
export const vazirmatnArabic = localFont({
  src: '../assets/fonts/vazirmatn-arabic-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  preload: true,
  variable: '--font-vazirmatn-ar',
  fallback: ['Tahoma', 'Segoe UI', 'sans-serif'],
});

export const vazirmatnLatin = localFont({
  src: '../assets/fonts/vazirmatn-latin-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  preload: true,
  variable: '--font-vazirmatn-lat',
  fallback: ['Segoe UI', 'Tahoma', 'sans-serif'],
});

export const cormorant = localFont({
  src: [
    {
      path: '../assets/fonts/cormorant-garamond-latin-300-normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/cormorant-garamond-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-cormorant',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});
