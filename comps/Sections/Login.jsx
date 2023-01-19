import {useState} from 'react'
const Login=()=>{
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
return(
<div className=" rounded-md bg-black p-5 " style={{background:'rgba(0,0,0,.7)'}}>
<h2 className="text-white font-bold text-2xl text-center">Teacher <br/> Login</h2><br/>
      <label className="block text-white" htmlFor="username">Username</label>
        <input className="block" type="text" id="userName" value={username} onChange={(e)=>{
setUsername(e.target.value)
}}/>
    <label className="block text-white" htmlFor="password">Password</label>
<input className="block " type="password" id="password" value={password} onChange={(e)=>{
setPassword(e.target.value)
}}/><br/>
   <button className="bg-white rounded-md shadow-md hover:bg-slate-100 text-black font-bold text-md py-1 px-2 block m-auto">Login</button>

</div>
)
}
export default Login
