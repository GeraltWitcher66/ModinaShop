import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import {
  categories,
  newArrivals,
  promises,
  productsByCategory,
} from '@/lib/store-data';
import { formatNumber } from '@/lib/format';
import { TruckIcon, BadgeIcon, ReturnIcon, GiftIcon } from '@/components/Icons';
import { absoluteUrl } from '@/lib/site';

export const metadata = {
  alternates: { canonical: absoluteUrl('/') },
};

const basePath = '/ModinaShop';

const promiseIcons = [TruckIcon, BadgeIcon, ReturnIcon, GiftIcon];
const promiseList = promises.map((promise, index) => ({
  ...promise,
  Icon: promiseIcons[index],
}));

export default function HomePage() {
  return (
    <>
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-image"
          src={`${basePath}/images/hero.jpg`}
          alt="بوتیک مُدینا؛ رگال‌های پوشاک در نور گرم"
          width="2400"
          height="1400"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light">کلکسیون پاییز و زمستان ۱۴۰۵</p>
            <h1>
              پوشاکی که
              <br />
              شخصیت شما را
              <br />
              <span className="hero-accent">روایت</span> می‌کند.
            </h1>
            <p className="hero-text">
              مُدینا از سال ۱۳۹۶ در تهران، لباس‌هایی برای مردان، زنان و کودکان
              می‌دوزد که پارچهٔ اصیل، برش دقیق و آرامش رنگ را در یک جا جمع
              می‌کنند.
            </p>
            <div className="hero-actions">
              <Link href="/shop" className="btn btn--light">
                کشف کلکسیون
              </Link>
              <Link href="/#story" className="hero-link">
                داستان مُدینا ←
              </Link>
            </div>
          </div>

          <div className="hero-foot">
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>{formatNumber(120)}+</strong>
                <span>قطعه در کلکسیون تازه</span>
              </div>
              <div className="hero-stat">
                <strong>{formatNumber(40)}٬۰۰۰</strong>
                <span>مشتری در سراسر ایران</span>
              </div>
              <div className="hero-stat">
                <strong>{formatNumber(3)}</strong>
                <span>دسته‌بندی، یک زبان مشترک</span>
              </div>
            </div>
            <p className="hero-side">EST. ۱۳۹۶ — TEHRAN</p>
          </div>
        </div>
      </section>

      <section className="promises" aria-label="خدمات فروشگاه">
        <div className="container promises-inner">
          {promiseList.map(({ title, text, Icon }) => (
            <div className="promise" key={title}>
              <Icon />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <p className="section-index">۰۱ — دسته‌بندی‌ها</p>
              <h2 className="section-title">
                برای هر نسلی، <em>یک امضا</em>
              </h2>
              <p className="section-sub">
                سه دنیای جداگانه با یک زبان مشترک: پارچهٔ خوب، دوخت تمیز و
                رنگ‌هایی که خسته نمی‌شوند.
              </p>
            </div>
            <Link href="/shop" className="link-more">
              همهٔ محصولات ←
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="cat-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}${category.image}`}
                  alt={`دستهٔ ${category.name} مُدینا`}
                  width="900"
                  height="1200"
                  loading="lazy"
                />
                <div className="cat-body">
                  <span className="cat-latin">{category.latin}</span>
                  <h3 className="cat-name">{category.name}</h3>
                  <p className="cat-tag">{category.tagline}</p>
                  <span className="cat-cta">
                    {formatNumber(productsByCategory(category.slug).length)} قطعه — مشاهده ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <p className="section-index">۰۲ — تازه‌ها</p>
              <h2 className="section-title">
                تازه رسیده‌های <em>این فصل</em>
              </h2>
            </div>
            <Link href="/shop" className="link-more">
              دیدن همه ←
            </Link>
          </div>

          <div className="product-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial">
        <div className="editorial-grid">
          <div className="editorial-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/images/editorial-men.jpg`}
              alt="کمپین مردانهٔ مُدینا؛ کاپشن چرم"
              width="1600"
              height="1100"
              loading="lazy"
            />
          </div>
          <div className="editorial-body">
            <p className="section-index">۰۳ — کمپین مردانه</p>
            <h2 className="editorial-title">
              برش‌هایی که برای سال‌ها ساخته می‌شوند، نه برای یک فصل.
            </h2>
            <p className="editorial-text">
              چرم طبیعی، پشم مرینوس و دنیم سنگین؛ قطعاتی که با گذر زمان
              نرم‌تر می‌شوند و فرم خود را از دست نمی‌دهند. کلکسیون مردانهٔ
              مُدینا روی سه اصل بنا شده است: دوام، سکوت و تناسب.
            </p>
            <Link href="/category/men" className="btn btn--outline-light">
              کلکسیون مردانه
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <p className="section-index">۰۴ — چرا مُدینا</p>
              <h2 className="section-title">
                خریدی که <em>بی‌دغدغه</em> باشد
              </h2>
            </div>
          </div>

          <div className="services-grid">
            {promiseList.map(({ title, text, Icon }) => (
              <div className="service" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep" id="story">
        <div className="container story-grid">
          <div className="story-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/images/editorial-atelier.jpg`}
              alt="کارگاه مُدینا؛ رگال پارچه‌های خنثی"
              width="1600"
              height="1200"
              loading="lazy"
            />
          </div>
          <div className="story-body">
            <p className="section-index">۰۵ — داستان مُدینا</p>
            <h2 className="section-title">
              از یک کارگاه کوچک در تهران، تا کمد لباس شما
            </h2>
            <p className="story-quote">
              پارچه، برش، دوخت؛ سه ضلع یک وسواس.
            </p>
            <p className="story-text">
              مُدینا با این باور شروع شد که پوشاک خوب نباید تنها به ویترین
              خلاصه شود. هر قطعه پیش از رسیدن به شما، از دست طراح، الگوساز و
              خیاط می‌گذرد؛ با پارچه‌هایی که از تولیدکنندگان منتخب ایران و
              ترکیه تأمین می‌شوند و دوختی که برای استفادهٔ روزمره آزمایش شده
              است.
            </p>
            <div className="story-stats">
              <div className="story-stat">
                <b>۹ سال</b>
                <span>تجربهٔ دوخت</span>
              </div>
              <div className="story-stat">
                <b>۱۲ کارگاه</b>
                <span>همکار در ایران</span>
              </div>
              <div className="story-stat">
                <b>۹۸٪</b>
                <span>رضایت مشتریان</span>
              </div>
            </div>
            <Link href="/shop" className="link-more story-link">
              دیدن کلکسیون ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
