'use client';

import { useWishlist } from './WishlistProvider';
import { HeartIcon } from './Icons';

export default function WishlistButton({ slug, className = '', showLabel = false }) {
  const { isSaved, toggle, mounted } = useWishlist();
  const active = mounted && isSaved(slug);
  const label = active ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها';

  return (
    <button
      type="button"
      className={`wish-button${active ? ' is-active' : ''}${className ? ` ${className}` : ''}`}
      onClick={() => toggle(slug)}
      aria-pressed={active}
      aria-label={label}
      title={label}
    >
      <HeartIcon filled={active} />
      {showLabel ? (
        <span>{active ? 'در فهرست علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}</span>
      ) : null}
    </button>
  );
}
