'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from './CartProvider';
import { useWishlist } from './WishlistProvider';
import { CartIcon, HeartIcon, MenuIcon, CloseIcon } from './Icons';
import { formatNumber } from '@/lib/format';

const navLinks = [
  { href: '/shop', label: 'فروشگاه' },
  { href: '/category/men', label: 'مردانه' },
  { href: '/category/women', label: 'زنانه' },
  { href: '/category/kids', label: 'بچگانه' },
  { href: '/#story', label: 'داستان مُدینا' },
];

const drawerLinks = [
  ...navLinks,
  { href: '/wishlist', label: 'علاقه‌مندی‌ها' },
  { href: '/cart', label: 'سبد خرید' },
];

export default function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, '');
  const { count: cartCount, mounted } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <div className="announce">
        <p>
          ارسال رایگان برای سفارش‌های بالای ۲٬۵۰۰٬۰۰۰ تومان
          <span className="announce-dot" aria-hidden="true" />
          کلکسیون پاییز و زمستان ۱۴۰۵ منتشر شد
        </p>
      </div>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="مُدینا — صفحه اصلی">
            <span className="brand-name">مُدینا</span>
            <span className="brand-latin">Modina</span>
          </Link>

          <nav className="main-nav" aria-label="ناوبری اصلی">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' is-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link
              href="/wishlist"
              className="wishlist-button"
              aria-label="علاقه‌مندی‌ها"
            >
              <HeartIcon />
              {mounted && wishlistCount > 0 && (
                <span className="wishlist-count">
                  {formatNumber(wishlistCount)}
                </span>
              )}
            </Link>
            <Link href="/cart" className="cart-button" aria-label="سبد خرید">
              <CartIcon />
              <span className="cart-button-label">سبد خرید</span>
              {mounted && cartCount > 0 && (
                <span className="cart-count">{formatNumber(cartCount)}</span>
              )}
            </Link>
            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="باز کردن منو"
              aria-expanded={menuOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${menuOpen ? ' is-open' : ''}`}>
        <div className="drawer-head">
          <span className="brand-name">مُدینا</span>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(false)}
            aria-label="بستن منو"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="drawer-nav" aria-label="ناوبری موبایل">
          {drawerLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <span className="drawer-index">{formatNumber(index + 1)}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-foot">
          <p>ارسال به سراسر ایران</p>
          <a href="mailto:hello@modina.ir">hello@modina.ir</a>
        </div>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="drawer-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="بستن منو"
        />
      )}
    </>
  );
}
