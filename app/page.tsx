import {
  getActiveProductsWithPrices,
  getSession,
  getSubscription
} from '@/app/supabase-server';
import Pricing from '@/components/Pricing';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <>
      <Navbar />
      <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />

      <Footer />
    </>
  );
}
