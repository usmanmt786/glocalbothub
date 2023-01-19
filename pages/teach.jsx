import Head from 'next/head'
import Teach from '@/comps/Sections/Teach'
const teachPage =()=>{
return(
<>
 <Head>
        <title>Glocal Bot - Teach</title>
        <meta name="description" content="An artificial intelligence powered Robot by Glocal Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
<main className="h-full overflow-auto">

<Teach/>
</main>
</>
)
}
export default teachPage
