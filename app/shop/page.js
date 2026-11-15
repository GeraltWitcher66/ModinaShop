import ShopBrowser from '@/components/ShopBrowser';
import PageHead from '@/components/PageHead';
import { products } from '@/lib/store-data';
import { formatNumber } from '@/lib/format';
import { absoluteUrl } from '@/lib/site';

export const metadata = {
  title: 'فروشگاه',
  description:
    'کلکسیون کامل مُدینا؛ پوشاک مردانه، زنانه و بچگانه با پارچهٔ اصیل و دوخت ایرانی.',
  alternates: { canonical: absoluteUrl('/shop/') },
};

export default function ShopPage() {
  return (
    <>
      <PageHead
        breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'فروشگاه' }]}
        title="کلکسیون مُدینا"
        subtitle={`${formatNumber(products.length)} قطعه برای این فصل؛ از کت‌وشلوارهای رسمی تا بافت‌های روزمره. جست‌وجو کنید، فیلتر بگذارید و قطعهٔ خودتان را پیدا کنید.`}
      />

      <section className="section section--tight">
        <div className="container">
          <ShopBrowser products={products} />
        </div>
      </section>
    </>
  );
}
