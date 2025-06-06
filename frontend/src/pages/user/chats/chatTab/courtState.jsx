import React from 'react';
import useUpdateCourtState from '../../../../hooks/useUpdateCourtState';
import useCourt from '../../../../store/useCourt';

function courtState({ courtCard, state, setState }) {
    const { updateCourtState } = useUpdateCourtState(courtCard._id);
    const handleUpdateCourtState = (newState) => {
        updateCourtState(newState);
        setState(newState);
    }


    return (
        <div>
            <button className="btn btn-outline btn-accent" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>{state}</button>
            <ul className="dropdown menu w-52 rounded-box bg-accent shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                <li><a onClick={() => handleUpdateCourtState('prosecution')}>Prosecution</a></li>
                <li><a onClick={() => handleUpdateCourtState('defence')}>Defence</a></li>
                <li><a onClick={() => handleUpdateCourtState('judge')}>Judge</a></li>
                <li><a onClick={() => handleUpdateCourtState('open')}>Open</a></li>
            </ul>
        </div>
    )
}
export default courtState;