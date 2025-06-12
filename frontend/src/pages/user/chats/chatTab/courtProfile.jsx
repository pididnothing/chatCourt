import { FaBook } from "react-icons/fa";

function CourtProfile(courtRoom) {
    const court = courtRoom.courtCard;
    const judge = Array.isArray(court.judge) ? court.judge.join(', ') : court.judge;
    const prosLawyer = Array.isArray(court.prosLawyer) ? court.prosLawyer.join(', ') : court.prosLawyer;
    const defLawyer = Array.isArray(court.defLawyer) ? court.defLawyer.join(', ') : court.defLawyer;
    const prosClient = Array.isArray(court.prosClient) ? court.prosClient.join(', ') : court.prosClient;
    const defClient = Array.isArray(court.defClient) ? court.defClient.join(', ') : court.defClient;
    const jury = Array.isArray(court.jury) ? court.jury.join(', ') : court.jury;

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('court-profile-modal').showModal()}><FaBook size='20' /></button>
            <dialog id="court-profile-modal" className="modal flex items-center justify-center flex-col gap-1">
                <h1> Press <kbd className='kbd'>Esc</kbd> to exit</h1>
                <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box">
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Court Profile</h1>
                        <button className='btn btn-circle btn-ghost justify-self-end' onClick={() => document.getElementById('court-profile-modal').close()}>X</button>
                    </div>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'><b>Judge:</b> {judge}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'><b>Prosecution Lawyer:</b> {prosLawyer}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'><b>Prosecution Client:</b> {prosClient}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'><b>Defence Lawyer:</b> {defLawyer}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'><b>Defence Client:</b> {defClient}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'><b>Jury Members:</b> {jury}</h2>
                </fieldset>
            </dialog>
        </div>
    )
}
export default CourtProfile;