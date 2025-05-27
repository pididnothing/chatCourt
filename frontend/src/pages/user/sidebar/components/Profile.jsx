import React, { useRef } from 'react'
import { BsFillPersonBadgeFill } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import toast from 'react-hot-toast';
import { MdCopyAll } from "react-icons/md";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('chat-user'));
    const profile = useRef();
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
    useGSAP(() => {
        gsap.from(profile.current, { x: -500, duration: 1.5, ease: "bounce", delay: 1.6 });
    });

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Id copied to clipboard!');
    };

    return (
        <div>
            <button ref={profile} className='btn' onClick={() => document.getElementById('profile-modal').showModal()}><BsFillPersonBadgeFill size={24} /></button>
            <dialog id="profile-modal" className="modal flex items-center justify-center flex-col gap-1">
                <h1> Press <kbd className='kbd'>Esc</kbd> to exit</h1>
                <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box">
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Profile</h1>
                        <button className='btn btn-circle btn-ghost justify-self-end' onClick={() => document.getElementById('profile-modal').close()}>X</button>
                    </div>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'>Name:{user.fullname}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'>Email:{user.email}</h2>
                    <h2 className='text-xl w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200 p-1 rounded-box'>Id: {user._id}
                        <button
                            className='btn btn-sm btn-ghost ml-2 justify-self-end'
                            onClick={() => copyToClipboard(user._id)}
                        >
                            <MdCopyAll size={24} />
                        </button>
                    </h2>
                </fieldset>
            </dialog>
        </div>
    )
}

export default Profile