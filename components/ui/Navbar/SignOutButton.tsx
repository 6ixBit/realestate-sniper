'use client';

import { Button } from '../buttoncn';
import s from './Navbar.module.css';
import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <Button variant="destructive" className={s.link} onClick={handleSignOut}>
      Sign out
    </Button>
  );
}
