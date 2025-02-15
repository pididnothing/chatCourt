import React from 'react'
import CourtCard from './CourtCard'
import useGetCourts from '../../../../hooks/useGetCourts';

function Courts() {
    const { loading, courts } = useGetCourts();
    console.log(courts);

    return (<div>
        {loading ? <h1>Loading...</h1> : courts.map(id => <CourtCard key={id} courtRoomId={id} />)}
    </div>
    )
}

export default Courts