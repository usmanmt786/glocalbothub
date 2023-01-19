import '@/styles/globals.css'
import Header from '@/comps/Header'
export default function App({ Component, pageProps }) {
  return <section className="flex flex-col h-screen">
<Header/>
<Component {...pageProps} />
</section>
}
