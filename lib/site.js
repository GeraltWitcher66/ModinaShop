// دامنهٔ نهایی سایت. در بیلد GitHub Actions از NEXT_PUBLIC_SITE_URL پر می‌شود
// و مقدار پیش‌فرض برای بیلد محلی است. مسیر پایه باید با basePath در next.config.mjs یکی باشد.
const fallbackOrigin = 'https://modinashop.github.io';

export const sitePath = '/ModinaShop';

export const siteBase = `${(process.env.NEXT_PUBLIC_SITE_URL || fallbackOrigin).replace(/\/+$/, '')}${sitePath}`;

export const siteHost = new URL(siteBase).origin;

export const absoluteUrl = (path = '/') =>
  `${siteBase}${path.startsWith('/') ? path : `/${path}`}`;

export const productUrl = (slug) => absoluteUrl(`/product/${slug}/`);
