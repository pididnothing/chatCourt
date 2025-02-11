import React from 'react'
import Message from '../messages/Message'
import Sendmsg from '../sendmsg/Sendmsg'
function ChatTab() {
    return (
        <>
            <input type="radio" name="my_tabs_3" className="tab h-1/25" aria-label="Tab 1" />
            <div className='tab-content relative rounded-box bg-white overflow-scroll'>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </>
    )
}

//Starter Code
// function ChatTab() {
//     return (
//         <>
//             <input type="radio" name="my_tabs_3" className="tab h-1/25" aria-label="Tab 1" />
//             <div className='tab-content relative rounded-box bg-white overflow-scroll'>
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//                 <Message />
//             </div>
//         </>
//     )
// }

export default ChatTab