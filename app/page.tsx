function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-blue-200 font-medium">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-16 items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <a href="https://userfront.com" target="_blank">
          <img src="/userfront.svg" className="w-full max-w-xs" />
        </a>
        <span className="text-5xl">+</span>
        <a href="https://vercel.com" target="_blank">
          <img src="/vercel.svg" className="w-full max-w-xs" />
        </a>
      </div>
      <div className="max-w-md flex flex-col gap-2">
        <p>Hi! 👋</p>
        <p>
          You have a working Nextjs app using Vercel&apos;s infrastucture and
          Userfront&apos;s authentication. You can:
        </p>
        <ol className="list-decimal pl-8">
          <li>
            Visit <Link href="/signup">Signup</Link> to create an end user
          </li>
          <li>
            Visit <Link href="/login">Login</Link> to login your end user
          </li>
          <li>
            Visit <Link href="/dashboard">Dashboard</Link> as an logged in user
          </li>
        </ol>
        <p>
          You can manage your users and tenants through the{" "}
          <Link href="https://userfront.com/dashboard">
            Userfront dashboard
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
