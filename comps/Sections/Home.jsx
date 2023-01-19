import {GiRobotGolem} from 'react-icons/gi'
import {useRouter} from 'next/router'
const Home = ()=>{
const router = useRouter()
return(
<div className="bg-stone-100 h-full flex flex-col md:flex-row items-center ">
<div className="w-1/2 flex items-center justify-center">
<img src="hi-robot.gif"/>
</div>
<div className="w-1/2 flex items-center justify-center flex-col gap-5">
<h1 className="md:text-5xl text-center text-2xl font-bold md:leading-snug">
Glocal Bot Hub
<br/>Welcomes you..!
</h1>
<div className="flex gap-10">
<a href="#" className="rounded-md bg-stone-400 text-white px-2 py-3 text-md md:text-xl font-bold hover:bg-stone-300 shadow-md cursor-pointer">Ask me</a>
<a href="/teach" className="rounded-md bg-black text-white px-2 py-3 text-md md:text-xl font-bold hover:bg-stone-700 shadow-md cursor-pointer" onClick={(e)=>{
e.preventDefault()
router.push('/teach')
}}>Teach me</a>
</div>
</div>
</div>
)
}

export default Home
