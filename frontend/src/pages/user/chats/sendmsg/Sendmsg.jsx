import React from 'react'
import { BiSolidSend } from "react-icons/bi";
function Sendmsg() {
    return (
        <div className='place-self-end h-1/10 w-full bg-base-300 p-2.5'>
            <div className='fieldset flex'>
                <input type='text' className='input w-full bg-base-200 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100' placeholder='Type your message' />
                <button className='btn w-10% bg-accent border-0'>
                    <BiSolidSend size={24} color='#a0004a' />
                </button>
            </div>
        </div>
    )
}

//Starter Code
// function Sendmsg() {
//     return (
//         <div className='place-self-end h-1/10 w-full bg-base-300 p-2.5'>
//             <div className='fieldset flex'>
//                 <input type='text' className='input w-full bg-base-200 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100' placeholder='Type your message' />
//                 <button className='btn w-10% bg-accent border-0'>
//                     <BiSolidSend size={24} color='#a0004a' />
//                 </button>
//             </div>
//         </div>
//     )
// }

export default Sendmsg