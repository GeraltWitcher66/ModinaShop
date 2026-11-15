'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { categories, getCategory } from '@/lib/store-data';
import { formatNumber } from '@/lib/format';
import { SearchIcon } from './Icons';

const filters = [{ slug: 'all', name: 'همه' }, ...categories];

const sortOptions = [
  { value: 'curated', label: 'پیشنهاد مُدینا' },
  { value: 'newest', label: 'جدیدترین' },
  { value: 'price-asc', label: 'ارزان‌ترین' },
  { value: 'price-desc', label: 'گران‌ترین' },
];

const sorters = {
  curated: () => 0,
  newest: (a, b) => b.addedAt.localeCompare(a.addedAt),
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
};

// جست‌وجوی فارسی: نیم‌فاصله، فاصله و حروف عربی/فارسی یکسان در نظر گرفته می‌شوند
const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[\s\u200c\u200e\u200f]+/g, '')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک');

export default function ShopBrowser({ products }) {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('curated');

  const visible = useMemo(() => {
    const needle = normalize(query.trim());

    return products
      .filter((product) => active === 'all' || product.category === active)
      .filter((product) => {
        if (!needle) return true;
        const haystack = [
          product.name,
          getCategory(product.category).name,
          ...product.colors.map((color) => color.name),
        ].join(' ');
        return normalize(haystack).includes(needle);
      })
      .sort(sorters[sort]);
  }, [active, query, sort, products]);

  const resetFilters = () => {
    setQuery('');
    setActive('all');
    setSort('curated');
  };

  return (
    <>
      <div className="shop-toolbar">
        <div className="search-field">
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="جست‌وجو در نام، دسته یا رنگ…"
            aria-label="جست‌وجوی محصولات"
          />
          {query ? (
            <button
              type="button"
              className="search-clear"
              onClick={() => setQuery('')}
              aria-label="پاک کردن جست‌وجو"
            >
              ×
            </button>
          ) : null}
        </div>

        <label className="sort-field">
          <span>مرتب‌سازی</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="ترتیب نمایش محصولات"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="filter-bar">
        <div className="chips" role="group" aria-label="فیلتر دسته‌بندی">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              type="button"
              className={`chip${active === filter.slug ? ' is-active' : ''}`}
              onClick={() => setActive(filter.slug)}
              aria-pressed={active === filter.slug}
            >
              {filter.name}
            </button>
          ))}
        </div>
        <p className="result-count">
          {formatNumber(visible.length)} قطعه
          {query.trim() ? ` برای «${query.trim()}»` : ''}
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="shop-empty">
          <p>چیزی مطابق جست‌وجوی شما پیدا نشد.</p>
          <button type="button" className="link-more" onClick={resetFilters}>
            نمایش همهٔ محصولات
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
