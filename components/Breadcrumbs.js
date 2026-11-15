import Link from 'next/link';
import { Fragment } from 'react';

export default function Breadcrumbs({ items, light = false }) {
  return (
    <nav
      aria-label="مسیر صفحه"
      className={`breadcrumb${light ? ' breadcrumb--light' : ''}`}
    >
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
