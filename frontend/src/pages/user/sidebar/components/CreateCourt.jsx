import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import useCreateCourt from '../../../../hooks/useCreateCourt';
import useCourt from '../../../../store/useCourt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CreateCourt = () => {
    const createbutton = useRef();
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
    useGSAP(() => {
        gsap.from(createbutton.current, { y: 10, opacity: 0, duration: 1.5, ease: "out", delay: 3.5 });
    })

    const { loading, createCourt } = useCreateCourt(false);
    const { setSelectedCourt } = useCourt();
    const [courtData, setCourtData] = React.useState({
        courtRoomName: '',
        judge: '',
        prosLawyer: '',
        prosClient: '',
        defLawyer: '',
        defClient: ''
    });
    const handleSubmit = (e) => {
        document.getElementById('create-form-modal').showModal()
    }
    const handleCreate = async (e) => {
        if (loading) return;
        const success = handleInputErrors(courtData);
        if (!success) {
            return false;
        }
        try {
            const res = await createCourt(courtData);
            toast.success('Court Created Successfully')
            setCourtData({
                courtRoomName: '',
                judge: '',
                prosecutionLawyer: '',
                prosecutionClient: '',
                defenceLawyer: '',
                defenceClient: ''
            })
            console.log(res)
            setSelectedCourt(res.body.courtRoom._id)
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        } finally {
            document.getElementById('create-form-modal').close()
        }
    }
    const handleInputErrors = ({ courtRoomName, judge, prosecutionLawyer, prosecutionClient, defenceLawyer, defenceClient }) => {
        if (courtRoomName === '' || judge === '' || prosecutionLawyer === '' || prosecutionClient === '' || defenceLawyer === '' || defenceClient === '') {
            toast.error('All fields are required')
            return false
        }
        return true;
    }
    return (
        <div>
            <button ref={createbutton} className='btn w-full' onClick={handleSubmit}>Create Court</button>
            <dialog id="create-form-modal" className="modal flex items-center justify-center flex-col gap-1">
                <h1> Press <kbd className='kbd'>Esc</kbd> to exit</h1>
                <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box">
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Provide Court Details</h1>
                        <button className='btn btn-circle btn-ghost justify-self-end' onClick={() => document.getElementById('create-form-modal').close()}>X</button>
                    </div>
                    <label className='label'>Court Room Name</label>
                    <input type='text' name='courtRoomName' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Court Room Name' onChange={(e) => setCourtData(prevState => ({ ...prevState, courtRoomName: e.target.value }))} value={courtData.courtRoomName} />
                    <label className='label'>Judge</label>
                    <input type='text' name='judge' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Judge' onChange={(e) => setCourtData(prevState => ({ ...prevState, judge: e.target.value }))} value={courtData.judge} />
                    <label className='label'>Prosecution Lawyer</label>
                    <input type='text' name='prosecutionLawyer' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Prosecution Lawyer' onChange={(e) => setCourtData(prevState => ({ ...prevState, prosLawyer: e.target.value }))} value={courtData.prosLawyer} />
                    <label className='label'>Prosecution Client</label>
                    <input type='text' name='prosecutionClient' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Prosecution Client' onChange={(e) => setCourtData(prevState => ({ ...prevState, prosClient: e.target.value }))} value={courtData.prosClient} />
                    <label className='label'>Defence Lawyer</label>
                    <input type='text' name='defenceLawyer' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Defence Lawyer' onChange={(e) => setCourtData(prevState => ({ ...prevState, defLawyer: e.target.value }))} value={courtData.defLawyer} />
                    <label className='label'>Defence Client</label>
                    <input type='text' name='defenceClient' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Defence Client' onChange={(e) => setCourtData(prevState => ({ ...prevState, defClient: e.target.value }))} value={courtData.defClient} />
                    <button className='btn w-full' onClick={handleCreate}>{loading ? <span className='loading loading-spinner'></span> : 'Create Court'}</button>
                </fieldset>
            </dialog>
        </div>
    )
}

export default CreateCourt