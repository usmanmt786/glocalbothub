import Head from 'next/head'
import Login from '@/comps/Sections/Login'

const loginPage=()=>{
return(
<>
 <Head>
        <title>Glocal Bot - Login</title>
        <meta name="description" content="An artificial intelligence powered Robot by Glocal Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
<main className="flex justify-center items-center h-full overflow-auto" style={{backgroundImage:'url(loginbg.jpeg)',backgroundSize:'cover'}}>

<Login/>
</main>
</>
)
}
export default loginPage
