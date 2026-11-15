import Link from 'next/link';
import { categories } from '@/lib/store-data';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-wordmark">مُدینا</span>
            <span className="footer-latin">Modina — Tehran</span>
            <p>
              خانهٔ پوشاک لوکس ایرانی؛ قطعاتی که با پارچهٔ اصیل، برش دقیق و
              دوخت آرام ساخته می‌شوند تا سال‌ها همراه شما بمانند.
            </p>
            <a href="mailto:hello@modina.ir" className="footer-mail">
              hello@modina.ir
            </a>
          </div>

          <div className="footer-col">
            <h3>فروشگاه</h3>
            <Link href="/shop">همهٔ محصولات</Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h3>مُدینا</h3>
            <Link href="/#story">داستان برند</Link>
            <Link href="/size-guide">راهنمای سایز</Link>
            <Link href="/cart">سبد خرید</Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              اینستاگرام
            </a>
          </div>

          <div className="footer-col footer-col--static">
            <h3>خدمات</h3>
            <Link href="/size-guide">راهنمای سایز و اندازه‌گیری</Link>
            <span>ارسال رایگان بالای ۲٬۵۰۰٬۰۰۰ تومان</span>
            <span>هفت روز مهلت بازگشت</span>
            <span>پشتیبانی هر روز، ۹ تا ۲۱</span>
            <span>بسته‌بندی هدیهٔ رایگان</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© ۱۴۰۵ مُدینا — تمام حقوق محفوظ است.</p>
          <p>طراحی و دوخت در تهران</p>
        </div>
      </div>
    </footer>
  );
}
