'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';
import WishlistButton from './WishlistButton';
import SizeTable from './SizeTable';
import { formatNumber } from '@/lib/format';
import { defaultSize, sizeCharts } from '@/lib/store-data';

export default function ProductPurchase({ product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(defaultSize(product));
  const [colorIndex, setColorIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const sizeChart = sizeCharts.find((chart) => chart.slug === product.category);

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      qty,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2400);
  };

  return (
    <div className="purchase">
      <p className="purchase-price">
        {product.oldPrice ? (
          <span className="price-old">{formatNumber(product.oldPrice)}</span>
        ) : null}
        <span className="price-current">
          {formatNumber(product.price)}
          <span className="currency">تومان</span>
        </span>
      </p>

      <div className="option-block">
        <div className="option-head">
          <span>رنگ</span>
          <span className="option-value">{product.colors[colorIndex].name}</span>
        </div>
        <div className="swatches">
          {product.colors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              className={`swatch${index === colorIndex ? ' is-active' : ''}`}
              style={{ '--swatch': color.hex }}
              onClick={() => setColorIndex(index)}
              aria-label={color.name}
              aria-pressed={index === colorIndex}
            />
          ))}
        </div>
      </div>

      <div className="option-block">
        <div className="option-head">
          <span>سایز</span>
          <Link href="/size-guide" className="size-guide-link">
            راهنمای سایز ←
          </Link>
        </div>
        <div className="sizes">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              className={`size-chip${option === size ? ' is-active' : ''}`}
              onClick={() => setSize(option)}
              aria-pressed={option === size}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="purchase-row">
        <div className="qty-stepper" aria-label="تعداد">
          <button
            type="button"
            onClick={() => setQty((value) => Math.max(1, value - 1))}
            aria-label="کاهش تعداد"
          >
            −
          </button>
          <span>{formatNumber(qty)}</span>
          <button
            type="button"
            onClick={() => setQty((value) => Math.min(9, value + 1))}
            aria-label="افزایش تعداد"
          >
            +
          </button>
        </div>
        <button type="button" className="btn btn--dark add-to-cart" onClick={handleAdd}>
          {added ? 'به سبد اضافه شد ✓' : 'افزودن به سبد خرید'}
        </button>
      </div>

      <WishlistButton slug={product.slug} showLabel className="wish-button--wide" />

      {added ? (
        <p className="added-note">
          قطعه به سبد شما اضافه شد. <Link href="/cart">مشاهدهٔ سبد خرید ←</Link>
        </p>
      ) : (
        <p className="purchase-note">
          ارسال رایگان برای این سفارش · تحویل ۲ تا ۴ روز کاری در تهران
        </p>
      )}

      {sizeChart ? (
        <details className="accordion">
          <summary>راهنمای سایز و جدول اندازه‌ها</summary>
          <p>{sizeChart.note}</p>
          <SizeTable chart={sizeChart} compact />
          <p className="size-note">
            اندازه‌ها تقریبی‌اند و ممکن است تا دو سانتی‌متر اختلاف داشته باشند.
          </p>
          <Link href="/size-guide" className="link-more">
            راهنمای کامل اندازه‌گیری ←
          </Link>
        </details>
      ) : null}

      <details className="accordion">
        <summary>جزئیات و جنس</summary>
        <ul>
          {product.details.map(([label, value]) => (
            <li key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </details>
      <details className="accordion">
        <summary>ارسال، تعویض و بازگشت</summary>
        <p>
          سفارش‌ها در تهران با پیک اختصاصی و در سایر شهرها با پست پیشتاز
          ارسال می‌شوند. تا هفت روز پس از دریافت، در صورت نداشتن اثر استفاده،
          تعویض یا بازگشت کالا رایگان است.
        </p>
      </details>
      <details className="accordion">
        <summary>راهنمای نگهداری</summary>
        <p>
          برای حفظ فرم و رنگ پارچه، شست‌وشو را ملایم و در دمای پایین انجام دهید
          و لباس را به‌صورت افقی خشک کنید. قطعات پشمی و چرمی را به خشک‌شویی
          بسپارید.
        </p>
      </details>
    </div>
  );
}
