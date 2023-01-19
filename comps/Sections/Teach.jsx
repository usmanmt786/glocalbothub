import {useState} from 'react'

const Teach=()=>{
const [command,setCommand]=useState('')
const [reply,setReply]=useState('')
return(
<div className="bg-stone-100 h-full flex flex-col md:flex-row items-center ">
<div className="w-1/2 flex items-center justify-center">
<img src="hi-robot.gif"/>
</div>
<div className="w-1/2 flex  flex-col gap-5">
<h1 className="md:text-3xl text-center text-2xl font-bold md:leading-snug">
Sir, Glocal Bot here.
<br/>Please teach me..!
</h1>
<div className="flex flex-col gap-5">
<textarea className="shadow-md  w-full md:w-4/5" placeholder="Drop commands here..." rows="4" onChange={(e)=>{
setCommand(e.target.value)
}}>{command}</textarea>
<textarea className="shadow-md w-full md:w-4/5" rows="10" placeholder="Drop expected replies  here..." onChange={(e)=>{
setCommand(e.target.value)
}}>{reply}</textarea>
   <button className="bg-green-400 rounded-md shadow-md hover:bg-green-300 text-white font-bold text-md p-2 block m-auto">Teach</button>
</div>
</div>
</div>
)
}
export default Teach
