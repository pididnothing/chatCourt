import React from 'react'
import Search from './components/Search'
import Logout from './components/Logout'
import Profile from './components/Profile';
import Courts from './components/Courts';
import CreateCourt from './components/CreateCourt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";

function Sidebar() {

    const sidebar = React.useRef();
    const title = React.useRef();
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
    gsap.registerPlugin(TextPlugin);

    useGSAP(() => {
        // Only animate if not smartphone size (e.g., width > 640px)
        if (window.innerWidth > 640) {
            const h = window.innerHeight;
            gsap.from(sidebar.current, { y: -h, duration: 1.5, ease: "bounce" });
        }
        gsap.to(title.current, { text: { value: "cC." }, duration: 1, ease: "none", delay: 1.6 });

    });

    return (
        <div ref={sidebar} className=" flex-col font-mono bg-base-300 rounded-box l:w-2/10 md:w-3/10 sm:w-3/10 w-10/10  h-full p-2.5 overflow-auto">
            <div className='flex flex-col h-3/20'>
                <div className='flex justify-between'>
                    <h1 ref={title} className='text-5xl'></h1>
                    <Profile />
                </div>
                <Search />
                <CreateCourt />
            </div>
            <div className='divider px-3'></div>
            <div className='flex flex-col h-14/20 overflow-auto'>
                <Courts />
            </div>
            {window.innerWidth > 640 ? <div className='divider px-3'></div> : null}
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