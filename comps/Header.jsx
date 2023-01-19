import {useRouter} from 'next/router'
const Header=()=>{
const router = useRouter()
return(
<div className="text-xl py-1 px-4 font-bold text-white bg-black shadow-lg sticky top-0">
<a href="/" onClick={(e)=>{
e.preventDefault()
router.push('/')
}}>Glocal Bot</a>
</div>
)
}
export default Header
