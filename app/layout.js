import { vazirmatnArabic, vazirmatnLatin, cormorant } from './fonts';
import { siteBase } from '@/lib/site';
import CartProvider from '@/components/CartProvider';
import WishlistProvider from '@/components/WishlistProvider';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

export const metadata = {
  metadataBase: new URL(`${siteBase}/`),
  title: {
    default: 'مُدینا | پوشاک لوکس مردانه، زنانه و بچگانه',
    template: '%s | مُدینا',
  },
  description:
    'مُدینا، خانهٔ پوشاک لوکس ایرانی؛ کلکسیونی از لباس‌های دوخته‌شده با پارچهٔ اصیل برای مردان، زنان و کودکان. ارسال به سراسر ایران.',
  applicationName: 'مُدینا',
  keywords: [
    'پوشاک لوکس',
    'لباس مردانه',
    'لباس زنانه',
    'لباس بچگانه',
    'فروشگاه پوشاک',
    'مدینا',
  ],
  openGraph: {
    title: 'مُدینا | پوشاک لوکس ایرانی',
    description:
      'کلکسیون پاییز و زمستان ۱۴۰۵ مُدینا؛ پوشاک مردانه، زنانه و بچگانه با پارچهٔ اصیل و دوخت ایرانی.',
    type: 'website',
    locale: 'fa_IR',
  },
};

export const viewport = {
  themeColor: '#171512',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatnArabic.variable} ${vazirmatnLatin.variable} ${cormorant.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          رفتن به محتوای اصلی
        </a>
        <CartProvider>
          <WishlistProvider>
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
