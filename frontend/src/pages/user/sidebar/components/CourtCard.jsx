import React, { useRef } from 'react'
import useGetCourtCard from '../../../../hooks/useGetCourtCard';
import useCourt from '../../../../store/useCourt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function CourtCard({ courtRoomId, number }) {

    const courtcard = useRef();
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
    useGSAP(() => {
        gsap.from(courtcard.current, { y: 10, opacity: 0, duration: 1.5, ease: "elastic", delay: 1 + number / 10 });
    });

    const { loading, courtCard } = useGetCourtCard(courtRoomId);
    // console.log("Court card: ", courtCard);
    const { selectedCourt, setSelectedCourt } = useCourt();
    return (
        <div ref={courtcard}>
            <div className={`card-sm ${courtRoomId == selectedCourt ? "bg-accent" : "bg-base-100"} rounded p-1 m-1.5 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg hover:cursor-pointer`} onClick={() => { setSelectedCourt(courtRoomId) }}>
                <div className='card-title overflow-hidden'>{loading ? <span className='loading loading-infinity'></span> : courtCard.courtRoomName}</div>
            </div>
        </div>
    )
}

//Starter Code
// function CourtsCard() {
//     return (
//         <div>
//             <div className='card-sm bg-base-100 rounded p-1 m-1.5 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg hover:cursor-pointer'>
//                 <div className='card-title'> Court Name</div>
//                 <div className='card-body h-1 overflow-hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem iste ad placeat non corporis fugit ratione assumenda iure nihil explicabo consectetur eos, dolore eaque, reprehenderit accusamus culpa esse nobis.</div>
//             </div>
//         </div>
//     )
// }

export default CourtCard