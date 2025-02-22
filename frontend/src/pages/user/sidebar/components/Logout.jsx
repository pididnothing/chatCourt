import React, { useRef } from 'react'
import useLogout from '../../../../hooks/useLogout'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Logout() {
    const logoutbutton = useRef();
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
    useGSAP(() => {
        gsap.from(logoutbutton.current, { opacity: 0, duration: 1.5, ease: "out", delay: 3.5 });
    });
    const { loading, logout } = useLogout();

    return (
        <div ref={logoutbutton}>
            {!loading ? (
                <button className='btn btn-ghost' onClick={logout}>Logout</button>) :
                (<button className='btn btn-ghost' disabled><span className='loading loading-spinner'></span></button>)
            }
        </div>
    )
}

//Starter Code
// function Logout() {
//     return (
//         <div>
//             <button className='btn btn-ghost'>Logout</button>
//         </div>
//     )
// }

export default Logout