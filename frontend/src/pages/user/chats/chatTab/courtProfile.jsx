import { FaBook } from "react-icons/fa";

function courtProfile(courtRoom) {
    const court = courtRoom.court;
    const judge = courtRoom.judge;
    const prosLawyer = courtRoom.prosLawyer[0];
    const defLawyer = courtRoom.defLawyer[0];
    const prosClient = courtRoom.prosClient[0];
    const defClient = courtRoom.defClient[0];

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
                </fieldset>
            </dialog>
        </div>
    )
}
export default courtProfile;