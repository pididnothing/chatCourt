import React, { useRef } from 'react'
import { LuArrowDownNarrowWide } from "react-icons/lu";
import useCourt from '../../../../store/useCourt';
import useGetCourts from '../../../../hooks/useGetCourts';
import toast from 'react-hot-toast'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Search() {
    const [search, setSearch] = React.useState('')
    const { setSelectedCourt } = useCourt()
    const { courts } = useGetCourts()
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
    const searchbox = useRef();
    const submitbutton = useRef();
    useGSAP(() => {

        gsap.from(searchbox.current, { y: 10, opacity: 0, duration: 1.5, ease: "out", delay: 3.2 });
        gsap.from(submitbutton.current, { x: -500, duration: 1.5, ease: "bounce", delay: 1.7 });
    })

    const handleSubmit = () => {
        if (!search) return
        // console.log("Courts:", courts)
        const court = courts.find((court) => court.courtRoomName.toLowerCase().includes(search.toLowerCase()))
        if (!court) {
            toast.error('Court not found')
            return
        }
        setSelectedCourt(court._id)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    return (
        <div>
            <div className='fieldset flex'>
                <input ref={searchbox} type='text' className='input w-full bg-base-200 border-0 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100'
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <button ref={submitbutton} className='btn w-10% bg-accent border-0' onClick={handleSubmit}>
                    <LuArrowDownNarrowWide size={24} color='#a0004a' />
                </button>
            </div>
        </div>
    )
}

//Starter Code
// function Search() {
//     return (
//         <div>
//             <div className='fieldset flex'>
//                 <input type='text' className='input w-90% bg-base-200 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-100' placeholder='Search' />
//                 <button className='btn w-10% bg-accent border-0'>
//                     <LuArrowDownNarrowWide size={24} color='#a0004a' />
//                 </button>
//             </div>
//         </div>
//     )
// }


export default Search