import React from 'react'
import Message from '../messages/Message'
import useGetMsgs from '../../../../hooks/useGetMsgs'
import useCourt from '../../../../store/useCourt'
import useGetCourtCard from '../../../../hooks/useGetCourtCard'

function ChatTab() {
    const { selectedCourt } = useCourt();
    const { loading, messages } = useGetMsgs(selectedCourt);
    const { courtCard } = useGetCourtCard(selectedCourt);
    // console.log("Here:", courtCard);
    if (selectedCourt === null) return <div className='w-full h-full bg-transparent flex justify-center items-center font-mono'>Choose a CourtRoom to get started!</div>;
    return (loading ? <div className='w-full h-full bg-transparent flex justify-center items-center'><div className='loading loading-spinner'></div></div> : <div className=' w-full h-full relative rounded-box bg-white overflow-auto'> {messages.map(msg => <Message key={msg._id} msg={msg} courtRoom={courtCard} />)}  </div>)
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