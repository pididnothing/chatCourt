import React from 'react'
import ChatTab from './chatTab/ChatTab'
import Sendmsg from './sendmsg/Sendmsg'

function Chatwindow() {
    return (
        <div className='flex flex-col w-full h-full bg-base-300 rounded-box p-2.5 overflow-auto'>
            <div className='relative tabs tabs-lift w-full h-full bg-base-300 rounded-box p-2.5 overflow-hidden'>
                <ChatTab />
            </div>
            <Sendmsg />
            <p className='absolute left-1/2  top-1/2 font-mono hidden bottom-0 m-auto text-2xl text-primary-500 cursor-pointer'>Hi, select a court to get started!</p>
        </div>
    )
}

//Starter Code
// function Chatwindow() {
//     return (
//         <div className='flex flex-col w-full h-full bg-base-300 rounded-box p-2.5 overflow-auto'>
//             <div className='tabs tabs-lift w-full h-full bg-base-300 rounded-box p-2.5 overflow-hidden'>
//                 <ChatTab />
//                 <ChatTab />
//                 <ChatTab />
//             </div>
//             <Sendmsg />
//         </div>
//     )
// }

export default Chatwindow