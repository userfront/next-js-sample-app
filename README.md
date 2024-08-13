# Userfront Next 14 Example

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and using [`@userfront/next`](https://www.npmjs.com/package/@userfront/next) for auth. The app is ready to be deployed to Vercel.


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fuserfront%2Fnext-js-sample-app&project-name=nextproject&integration-ids=oac_cNber98Way2tpblRNJAWff6O)


---

**Curious about how to use the Next SDK on your existing application?**

[Read the quickstart instructions on Userfront.](https://userfront.com/docs/quickstart?v=next)

[Read the guide on Userfront.](https://userfront.com/docs/examples/next)

## Requirements

- Node.js v18 or later

## Prerequisites

1. Have or create a Userfront account at https://userfront.com/
1. Install dependencies
    > npm install
1. Copy `.env.example` into a file called `.env.local`
    > cp .env.example .env.local
1. Have the following set as environment variables in `.env.local`:
    1. USERFRONT_JWT_PUBLIC_KEY (Can be found at https://userfront.com/dashboard/jwt?tab=public )
    1. NEXT_PUBLIC_USERFRONT_WORKSPACE_ID (Can be found at https://userfront.com/dashboard )


## Running the app

1. Run the development server
    > npm run dev
1. Visit http://localhost:3000


## Troubleshooting

Need some help? We're always here and happy to help. Please do not hesitate to [contact support](https://userfront.com/contact).
