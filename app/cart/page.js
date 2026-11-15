import CartView from '@/components/CartView';
import PageHead from '@/components/PageHead';

export const metadata = {
  title: 'سبد خرید',
  description: 'مرور و تکمیل سبد خرید مُدینا.',
};

export default function CartPage() {
  return (
    <>
      <PageHead
        breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'سبد خرید' }]}
        title="سبد خرید"
        subtitle="پیش از تکمیل سفارش، سایز و تعداد قطعات را یک بار دیگر بررسی کنید."
      />

      <div className="container">
        <CartView />
      </div>
    </>
  );
}
