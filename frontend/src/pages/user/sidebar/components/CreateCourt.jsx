import React from 'react'

const CreateCourt = () => {
    const [showCreateCourt, setShowCreateCourt] = React.useState(false)
    const handleSubmit = (e) => {
        document.getElementById('create-form-modal').showModal()
    }
    return (
        <div>
            <button className='btn w-full' onClick={handleSubmit}>Create Court</button>
            <dialog id="create-form-modal" className="modal flex items-center justify-center flex-col gap-1">
                <h1> Press <kbd className='kbd'>Esc</kbd> to exit</h1>
                <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box">
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Provide Court Details</h1>
                        <button className='btn btn-circle btn-ghost justify-self-end' onClick={() => document.getElementById('create-form-modal').close()}>X</button>
                    </div>
                    <label className='label'>Court Room Name</label>
                    <input type='text' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Court Room Name' />
                    <label className='label'>Judge</label>
                    <input type='text' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Judge' />
                    <label className='label'>Prosecution Lawyer</label>
                    <input type='text' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Prosecution Lawyer' />
                    <label className='label'>Prosecution Client</label>
                    <input type='text' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Prosecution Client' />
                    <label className='label'>Defence Lawyer</label>
                    <input type='text' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Defence Lawyer' />
                    <label className='label'>Defence Client</label>
                    <input type='text' className='input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200' placeholder='Defence Client' />
                    <button className='btn w-full'>Create Court</button>
                </fieldset>
            </dialog>
        </div>
    )
}

export default CreateCourt