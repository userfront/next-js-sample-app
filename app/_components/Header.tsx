"use client";

import Link from "next/link";
import { useUserfront } from "@userfront/next/client";

export default function Header() {
  const { isAuthenticated, logout } = useUserfront();

  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Home
        </Link>
        <div className="flex gap-4">
          {isAuthenticated ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button
                onClick={() => logout({ redirect: "/login" })}
                className="bg-blue-500 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Signup</Link>
              <Link href='/reset'>Reset Password</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
