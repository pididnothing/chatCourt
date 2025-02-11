import React from 'react'
import ChatTab from './chatTab/ChatTab'
import Sendmsg from './sendmsg/Sendmsg'

function Chatwindow() {
    return (
        <div className='flex flex-col w-full h-full bg-base-300 rounded-box p-2.5 overflow-auto'>
            <div className='tabs tabs-lift w-full h-full bg-base-300 rounded-box p-2.5 overflow-hidden'>
                <ChatTab />
                <ChatTab />
                <ChatTab />
            </div>
            <Sendmsg />
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