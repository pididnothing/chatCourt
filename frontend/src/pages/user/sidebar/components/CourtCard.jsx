import React from 'react'
import useGetCourtCard from '../../../../hooks/useGetCourtCard';
import useCourt from '../../../../store/useCourt';

function CourtCard({ courtRoomId }) {
    const { loading, courtCard } = useGetCourtCard(courtRoomId);
    // console.log("Court card: ", courtCard);
    const { selectedCourt, setSelectedCourt } = useCourt();
    return (
        <div>
            <div className={`card-sm ${courtRoomId == selectedCourt ? "bg-accent" : "bg-base-100"} rounded p-1 m-1.5 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg hover:cursor-pointer`} onClick={() => { setSelectedCourt(courtRoomId) }}>
                <div className='card-title'>{loading ? <span className='loading loading-infinity'></span> : courtCard.courtRoomName}</div>
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