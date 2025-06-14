import useUpdateCourtState from '../../../../hooks/useUpdateCourtState';
import useCourt from '../../../../store/useCourt';

function CourtState({ courtCard, state, setState }) {
    const { updateCourtState } = useUpdateCourtState(courtCard._id);
    const handleUpdateCourtState = (newState) => {
        updateCourtState(newState);
        setState(newState);
    }

    if (window.innerWidth < 640) {
        return (
            <div>
                <button className="btn btn-outline btn-accent" onClick={() => document.getElementById('court-state-modal').showModal()}>{state}</button>
                <dialog id="court-state-modal" className="modal flex items-center justify-center flex-col gap-1">
                    <h1> Press <kbd className='kbd'>Esc</kbd> to exit</h1>
                    <fieldset className="fieldset h-fit 2xl:w-3xl md:w-md sm:w-2xs bg-transparent border-0 p-4 rounded-box">
                        <div className='flex-col items-center justify-center gap-1'>
                            <div className='flex justify-between mb-2 rounded-box'>
                                <h1 className='text-2xl font-bold'>Court State</h1>
                                <button className='btn btn-circle btn-ghost justify-self-end' onClick={() => document.getElementById('court-state-modal').close()}><b>X</b></button>
                            </div>
                            <button className="btn w-full bg mb-2" onClick={() => { handleUpdateCourtState("open"); document.getElementById('court-state-modal').close(); }}>Open</button>
                            <button className="btn w-full mb-2" onClick={() => { handleUpdateCourtState("judge"); document.getElementById('court-state-modal').close(); }}>Judge</button>
                            <button className="btn w-full mb-2" onClick={() => { handleUpdateCourtState("prosecution"); document.getElementById('court-state-modal').close(); }}>Prosecution</button>
                            <button className="btn w-full mb-2" onClick={() => { handleUpdateCourtState("defence"); document.getElementById('court-state-modal').close(); }}>Defence</button>
                            <button className="btn w-full mb-2" onClick={() => { handleUpdateCourtState("jury"); document.getElementById('court-state-modal').close(); }}>Jury</button>
                            <button className="btn w-full mb-2" onClick={() => { handleUpdateCourtState("closed"); document.getElementById('court-state-modal').close(); }}>Closed</button>
                        </div>
                    </fieldset>
                </dialog>
            </div>
        );
    }

    return (
        <div className="relative z-50">
            <button className="btn btn-outline btn-accent" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>{state}</button>
            <ul className="dropdown menu w-52 rounded-box bg-accent shadow-sm z-60"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                <li><a onClick={() => handleUpdateCourtState('open')}>Open</a></li>
                <li><a onClick={() => handleUpdateCourtState('judge')}>Judge</a></li>
                <li><a onClick={() => handleUpdateCourtState('prosecution')}>Prosecution</a></li>
                <li><a onClick={() => handleUpdateCourtState('defence')}>Defence</a></li>
                <li><a onClick={() => handleUpdateCourtState('jury')}>Jury</a></li>
                <li><a onClick={() => handleUpdateCourtState('closed')}>Closed</a></li>
            </ul>
        </div>
    )
}
export default CourtState;