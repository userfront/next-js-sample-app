'use client';

import * as React from 'react';
import { useUserfront, LogoutButton } from '@userfront/next/client';

export default function DashboardPage() {
  const { user } = useUserfront();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <p>Hello, {user.email}</p>
      <h2>Welcome to the Dashboard</h2>
     <LogoutButton />
    </div>
  );
}