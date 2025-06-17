import React from 'react'
import CourtCard from './CourtCard'
import useGetCourts from '../../../../hooks/useGetCourts';
import ClosedCourtFilter from './ClosedCourtFilter';

function Courts() {
    const { loading, courts } = useGetCourts();
    const [closedFilter, setClosedFilter] = React.useState(false);
    // console.log(courts);

    return (
        <div>
            <div className='flex justify-row gap-2 items-center mb-4 sticky top-0 z-10 bg-base-300'>
                <h1 className='text- font-bold'>Closed Courts</h1>
                <ClosedCourtFilter closedFilter={closedFilter} setClosedFilter={setClosedFilter} />
            </div>
            {loading ? (
                <h1 className='loading loading-spinner'></h1>
            ) : (
                courts
                    .filter(court => !closedFilter || court.state !== "closed")
                    .map((court, index) => (
                        <CourtCard key={court._id} courtRoomId={court._id} number={index + 1} />
                    ))
            )}
        </div>
    );
}

export default Courts