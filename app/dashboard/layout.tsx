import { DashboardLayout } from '@/components/DashboardLayout';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
