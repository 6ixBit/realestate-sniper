'use client';

// import { QuizIcon } from './icons/QuizIcon';
// import { SettingsIcon } from './icons/SettingsIcon';
import { CardIcon } from './icons/CardIcon';
import { HomeIcon } from './icons/HomeIcon';
import { Button } from './ui/Button';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isTablet } = useWindowSize();
  const path = usePathname();

  const isActive = (routes: string[]) => {
    if (routes.some((route) => path.startsWith(route))) {
      return {
        border:
          'flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-300 bg-[#1DB8FA] bg-opacity-20 rounded-lg',
        text: 'text-[#24BAFA] mx-4'
      };
    } else {
      return {
        border:
          'flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-300 rounded-lg',
        text: 'mx-4'
      };
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 w-screen">
      <div
        className={`hidden md:flex ${
          isTablet ? 'w-20' : 'w-56'
        } bg-white p-4 shadow-lg  flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-center gap-1">
            <Image src="/logo.png" width={40} height={40} alt="ai logo" />
            {!isTablet && (
              <span className="font-bold text-2xl mx-2">Real Estate Scout</span>
            )}
          </div>

          <nav className="mt-8">
            <Link className={isActive(['/projects']).border} href="/projects">
              <HomeIcon className="w-4 h-4" />
              {!isTablet && (
                <span className={isActive(['/projects']).text}>projects</span>
              )}
            </Link>
            <Link
              className={isActive(['/deck', '/decks']).border}
              href="/decks"
            >
              <CardIcon className="w-4 h-4" />
              {!isTablet && (
                <span className={isActive(['/deck', '/decks']).text}>
                  decks
                </span>
              )}
            </Link>
            <Link className={isActive(['/quiz']).border} href="/quiz">
              {!isTablet && (
                <span className={isActive(['/quiz']).text}>Quiz</span>
              )}
            </Link>
          </nav>
        </div>

        <div className="flex items-center mt-8 flex-col">
          {!isTablet && (
            <Button
              variant="outline"
              onClick={() => {
                console.log('do sumn.');
              }}
            >
              Change Languages
            </Button>
          )}

          {!isTablet && (
            <span className="text-gray-600 pt-4">hamza@rs.com</span>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
}
