<p align="center">
  <a href="https://nextjs-postgres-auth.vercel.app/">
    <img src="/public/logo.webp" height="96">
    <h3 align="center">Next.js Prisma PostgreSQL Auth Starter</h3>
  </a>
</p>

<p align="center">
This is a <a href="https://nextjs.org/">Next.js</a> starter kit that uses <a href="https://next-auth.js.org/">Next-Auth</a> for simple email + password login<br/>
<a href="https://www.prisma.io/">Prisma</a> as the ORM, and a docker based Postgres database to persist the data.</p>

<p align="center">Contributions and suggestions are welcome.</p>

<br/>

## Developing Locally

```bash
# Clone this repo then
npm install
# or
yarn install
```

## Getting Started

First start docker compose. You would need to have docker installed on your local pc. 

```bash
docker compose up -d
# or
docker-compose up -d
# this depends on your version of docker and docker compose
```

-- Copy and paste .env.example to .env

Second, run the development server:

```bash
# Run 
npx prisma db push
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

