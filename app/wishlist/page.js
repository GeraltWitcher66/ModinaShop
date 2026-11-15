import WishlistView from '@/components/WishlistView';
import PageHead from '@/components/PageHead';

export const metadata = {
  title: 'علاقه‌مندی‌ها',
  description: 'قطعات ذخیره‌شدهٔ شما در مُدینا؛ فهرستی که در همین مرورگر نگه داشته می‌شود.',
};

export default function WishlistPage() {
  return (
    <>
      <PageHead
        breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'علاقه‌مندی‌ها' }]}
        title="علاقه‌مندی‌ها"
        subtitle="قطعاتی که با قلب نشان کرده‌اید. این فهرست در حافظهٔ مرورگر شما ذخیره می‌شود؛ با پاک‌کردن داده‌های مرورگر از بین می‌رود."
      />

      <section className="section section--tight">
        <div className="container">
          <WishlistView />
        </div>
      </section>
    </>
  );
}
