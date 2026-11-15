import Link from 'next/link';

export const metadata = {
  title: 'صفحه پیدا نشد',
};

export default function NotFound() {
  return (
    <section className="empty-cart">
      <p className="eyebrow">خطای ۴۰۴</p>
      <h1>این صفحه در کلکسیون ما نیست</h1>
      <p className="empty-copy">
        شاید آدرس تغییر کرده باشد. از فروشگاه شروع کنید تا قطعهٔ مورد نظرتان را
        پیدا کنید.
      </p>
      <Link href="/shop" className="btn btn--dark">
        بازگشت به فروشگاه
      </Link>
    </section>
  );
}
