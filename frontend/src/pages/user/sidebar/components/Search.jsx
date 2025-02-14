import React from 'react'
import { LuArrowDownNarrowWide } from "react-icons/lu";

function Search() {
    return (
        <div>
            <div className='fieldset flex'>
                <input type='text' className='input w-full bg-base-200 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100' placeholder='Search' />
                <button className='btn w-10% bg-accent border-0'>
                    <LuArrowDownNarrowWide size={24} color='#a0004a' />
                </button>
            </div>
        </div>
    )
}

//Starter Code
// function Search() {
//     return (
//         <div>
//             <div className='fieldset flex'>
//                 <input type='text' className='input w-90% bg-base-200 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100' placeholder='Search' />
//                 <button className='btn w-10% bg-accent border-0'>
//                     <LuArrowDownNarrowWide size={24} color='#a0004a' />
//                 </button>
//             </div>
//         </div>
//     )
// }


export default Search