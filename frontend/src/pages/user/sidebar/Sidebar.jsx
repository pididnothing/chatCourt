import React from 'react'
import Search from './components/Search'
import Logout from './components/Logout'
import CourtCard from './components/CourtCard'
import { BsFillPersonBadgeFill } from "react-icons/bs";

function Sidebar() {
    return (
        <div className=" flex-col font-mono bg-base-300 rounded-box xl:w-2/10 h-full p-2.5 overflow-auto">
            <div className='flex flex-col 3/20'>
                <div className='flex justify-between'>
                    <h1 className='text-5xl'>cC.</h1>
                    <button className='btn'><BsFillPersonBadgeFill size={24} /></button>
                </div>
                <Search />
            </div>
            <div className='divider px-3'></div>
            <div className='flex flex-col h-14/20 overflow-auto'>
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
                <CourtCard />
            </div>
            <div className='divider px-3'></div>
            <div className='flex flex-col h-1/30'>
                <Logout />
            </div>
        </div>
    )
}

//Starter Code
// function Sidebar() {
//     return (
//         <div className=" flex-col font-mono bg-base-300 rounded-box xl:w-2/10 h-full p-2.5 overflow-auto">
//             <div className='flex flex-col 3/20'>
//                 <div className='flex justify-between'>
//                     <h1 className='text-5xl'>cC.</h1>
//                     <button className='btn'><BsFillPersonBadgeFill size={24} /></button>
//                 </div>
//                 <Search />
//             </div>
//             <div className='divider px-3'></div>
//             <div className='flex flex-col h-14/20 overflow-auto'>
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//                 <CourtCard />
//             </div>
//             <div className='divider px-3'></div>
//             <div className='flex flex-col h-1/30'>
//                 <Logout />
//             </div>
//         </div>
//     )
// }


export default Sidebar