import React from 'react'
import CourtCard from './CourtCard'
import useGetCourts from '../../../../hooks/useGetCourts';

function Courts() {
    const { loading, courts } = useGetCourts();
    // console.log(courts);

    return (
        <div>
            {loading ? (
                <h1 className='loading loading-spinner'></h1>
            ) : (
                courts.map((court, index) => (
                    <CourtCard key={court._id} courtRoomId={court._id} number={index + 1} />
                ))
            )}
        </div>
    );
}

export default Courts