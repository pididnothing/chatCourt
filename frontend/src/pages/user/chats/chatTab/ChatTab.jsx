import { useRef, useEffect } from 'react'
import Message from '../messages/Message'
import useGetMsgs from '../../../../hooks/useGetMsgs'
import useCourt from '../../../../store/useCourt'
import useGetCourtCard from '../../../../hooks/useGetCourtCard'
import useListenMessages from '../../../../hooks/useListenMessages'
import useListenCourtStateUpdate from '../../../../hooks/useListenCourtStateUpdate'
import CourtProfile from './courtProfile'
import CourtState from './courtState'

function ChatTab() {
    const user = localStorage.getItem('chat-user');
    const uid = JSON.parse(user)._id;
    const { selectedCourt, state, setState } = useCourt();
    const { loading, messages } = useGetMsgs(selectedCourt);
    const { courtCard } = useGetCourtCard(selectedCourt);
    //console.log("ChatTab - selectedCourt:", selectedCourt, "courtCard:", courtCard, "state:", state);
    useListenMessages();
    useListenCourtStateUpdate();

    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
        setState(courtCard.state);
    }, [messages, selectedCourt]);

    if (selectedCourt === null)
        return <div className='w-full h-full bg-transparent flex justify-center items-center font-mono'> Choose a CourtRoom to get started!</div>;

    return (
        loading
            ? <div className='w-full h-full bg-transparent flex justify-center items-center'><div className='loading loading-spinner'></div></div>
            : <div ref={chatContainerRef} className='w-full h-full relative rounded-box bg-white overflow-auto'>
                <div className="flex-row sticky top-0 left-0 z-10">
                    <CourtProfile courtCard={courtCard} />
                    <CourtState courtCard={courtCard} state={state} setState={setState} />
                </div>
                {messages.map(msg => <Message key={msg._id} msg={msg} courtRoom={courtCard} />)}
            </div>
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