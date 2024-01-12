import ThemeProvider from '@/components/layout/Theme/theme-provider';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="w-full pt-16">{children}</main>
        </div>
      </ThemeProvider>
    </>
  );
}
