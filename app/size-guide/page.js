import PageHead from '@/components/PageHead';
import SizeTable from '@/components/SizeTable';
import { sizeCharts } from '@/lib/store-data';
import { formatNumber } from '@/lib/format';
import { absoluteUrl } from '@/lib/site';

export const metadata = {
  title: 'راهنمای سایز',
  description:
    'جدول اندازه‌های مردانه، زنانه و بچگانهٔ مُدینا همراه با راهنمای اندازه‌گیری برای انتخاب سایز درست.',
  alternates: { canonical: absoluteUrl('/size-guide/') },
};

const measureSteps = [
  {
    title: 'دور سینه',
    text: 'متر را از برجسته‌ترین نقطهٔ سینه، زیر بغل و به‌صورت افقی دور بدن نگه دارید.',
  },
  {
    title: 'دور کمر',
    text: 'باریک‌ترین نقطهٔ کمر را اندازه بگیرید؛ متر نه شل باشد نه فرورفته.',
  },
  {
    title: 'دور باسن',
    text: 'برجسته‌ترین نقطهٔ باسن را اندازه بگیرید، معمولاً ۲۰ سانتی‌متر پایین‌تر از کمر.',
  },
  {
    title: 'قد',
    text: 'بدون کفش، پشت به دیوار بایستید و از پاشنه تا بالای سر را اندازه بگیرید.',
  },
];

const tips = [
  'اندازه‌گیری را روی لباس زیر یا لباس نازک انجام دهید.',
  'متر خیاطی را آزاد نگه دارید؛ فشار دادن متر سایز را کوچک‌تر نشان می‌دهد.',
  'اگر بین دو سایز هستید، سایز بزرگ‌تر را انتخاب کنید.',
];

export default function SizeGuidePage() {
  return (
    <>
      <PageHead
        breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'راهنمای سایز' }]}
        title="راهنمای سایز"
        subtitle="همهٔ اندازه‌ها بر حسب سانتی‌متر و روی بدن اندازه‌گیری شده‌اند، نه روی لباس. با چهار اندازه ساده می‌توانید سایز درست خود را پیدا کنید."
      />

      <section className="section section--tight">
        <div className="container size-intro">
          <div>
            <p className="section-index">۰۱ — اندازه‌گیری</p>
            <h2 className="section-title">چهار اندازه، یک انتخاب درست</h2>
            <p className="section-sub">
              برای اندازه‌گیری به یک متر خیاطی و یک آینه نیاز دارید. بهتر است
              اندازه‌گیری را فرد دیگری انجام دهد تا متر صاف و افقی بماند.
            </p>

            <div className="measure-grid">
              {measureSteps.map((step, index) => (
                <div className="measure-step" key={step.title}>
                  <span className="measure-num">
                    ۰{formatNumber(index + 1)}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="size-tips">
            <h3>پیش از سفارش</h3>
            <ul>
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <p>
              هنوز مطمئن نیستید؟ اندازه‌های خود را برای تیم مُدینا بفرستید تا
              سایز پیشنهادی را با شما هماهنگ کنیم.
            </p>
            <a href="mailto:hello@modina.ir" className="link-more">
              مشاورهٔ سایز ←
            </a>
          </aside>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <p className="section-index">۰۲ — جدول اندازه‌ها</p>
          <div className="size-nav">
            {sizeCharts.map((chart) => (
              <a key={chart.slug} href={`#${chart.slug}`}>
                {chart.name}
              </a>
            ))}
          </div>

          {sizeCharts.map((chart) => (
            <section className="size-block" id={chart.slug} key={chart.slug}>
              <div className="section-head">
                <div className="section-head-main">
                  <h2 className="section-title">{chart.name}</h2>
                  <p className="section-sub">{chart.note}</p>
                </div>
              </div>

              <SizeTable chart={chart} />

              <p className="size-note">
                اندازه‌ها تقریبی هستند و ممکن است بسته به برش هر قطعه تا دو
                سانتی‌متر اختلاف داشته باشند.
              </p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
