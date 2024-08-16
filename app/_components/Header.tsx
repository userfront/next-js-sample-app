"use client";

import Link from "next/link";
import { useUserfront } from "@userfront/next/client";

export default function Header() {
  const { isAuthenticated, logout } = useUserfront();

  return (
    <header>
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Home
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          {isAuthenticated ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button
                onClick={() => logout({ redirect: "/login" })}
                className="px-2 py-1 bg-[#F2055C] font-medium rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
              <Link href="/reset">Reset Password</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
