import Head from 'next/head'
import Home from '@/comps/Sections/Home'



export default function HomePage() {
  return (
    <>
      <Head>
        <title>Glocal Bot</title>
        <meta name="description" content="An artificial intelligence powered Robot by Glocal Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="h-full overflow-auto">
<Home/>
</main>
    </>
  )
}
