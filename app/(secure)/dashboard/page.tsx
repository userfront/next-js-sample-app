"use client";

import * as React from "react";
import { useUserfront } from "@userfront/next/client";

export default function DashboardPage() {
  const { user } = useUserfront();

  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Hello, {user.email}</p>
      <h2>Welcome to the Dashboard</h2>
      <p>
        This is a protected page. You can see this because you are logged in.
      </p>
      <div className="mx-auto mt-24">
        <div className="bg-gray-900 text-white p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Your JWT user</span>
          </div>
          <div className="overflow-x-auto">
            <pre id="code" className="text-gray-300">
              <code>{JSON.stringify(user, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
