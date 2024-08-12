'use client'

import Link from 'next/link';
import { useUserfront } from '@userfront/next/client';

export default function Header() {
  const { isAuthenticated, logout } = useUserfront();

  return (
    <header className='p-4'>
      <nav className='flex justify-between items-center'>
        <Link href='/' className='text-lg font-bold'>My App</Link>
        <div>
          {isAuthenticated ? (
            <>
              <Link href='/dashboard' className='mr-4'>Dashboard</Link>
              <button onClick={() => logout({ redirect: '/login' })} className='bg-blue-500 text-white px-4 py-2 rounded'>Logout</button>
            </>
          ) : (
            <>
              <Link href='/login' className='mr-4'>Login</Link>
              <Link href='/signup' className='mr-4'>Signup</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}