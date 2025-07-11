import React, { useRef } from 'react'
import { BiSolidSend } from "react-icons/bi";
import toast from 'react-hot-toast'
import useSendMsgs from '../../../../hooks/useSendMsgs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useCourt from '../../../../store/useCourt';


function Sendmsg() {
    const { setState } = useCourt();
    const sendmsg = useRef();
    const sendbutton = useRef();
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
    useGSAP(() => {
        gsap.from(sendmsg.current, { y: 10, opacity: 0, duration: 1.5, ease: "out", delay: 3.5 });
        gsap.from(sendbutton.current, { y: 10, opacity: 0, duration: 1.5, ease: "out", delay: 3.5 });
    });

    const { loading, sendMsg } = useSendMsgs();
    const [msg, setMsg] = React.useState('')

    // Extract command and body for preview
    const getCommandPreview = (input) => {
        if (!input.startsWith('./')) return null;
        const firstSpace = input.indexOf(' ');
        let command, body;
        if (firstSpace === -1) {
            command = input;
            body = '';
        } else {
            command = input.slice(0, firstSpace);
            body = input.slice(firstSpace + 1);
        }
        return { command, body };
    };

    const commandPreview = getCommandPreview(msg);

    const handleSubmit = async (e) => {
        if (msg === '') {
            toast.error('Message cannot be empty')
        }
        if (loading) {
            toast.error('Please wait for the message to be sent')
        }
        try {
            await sendMsg(msg)
            if (msg.startsWith('./objection ')) {
                setState("judge");
            }
            setMsg('')
        } catch (error) {
            console.log("Error in sending message")
            console.log(error.message)
            toast.error("Error in sending message")
        }
    }
    return (
        <div className='place-self-end h-1/10 w-full bg-base-300 p-2.5'>
            <div className='fieldset flex flex-col gap-1'>
                <div className="flex w-full gap-2">
                    <input
                        ref={sendmsg}
                        type='text'
                        className='input w-full bg-base-200 border-0 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100'
                        placeholder='Type your message'
                        onChange={(e) => { setMsg(e.target.value) }}
                        value={msg}
                    />
                    <button ref={sendbutton} className='btn w-10% bg-accent border-0' onClick={handleSubmit}>
                        {loading ? (
                            <div className='loading loading-spinner'></div>
                        ) : (
                            <BiSolidSend size={24} color='#a0004a' />
                        )}
                    </button>
                </div>
                {commandPreview && (
                    <div className="mt-1 text-left">
                        <kbd className="kbd kbd-sm bg-gray-200 text-gray-800">{commandPreview.command}</kbd>
                    </div>
                )}
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