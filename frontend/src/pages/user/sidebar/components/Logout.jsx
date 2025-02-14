import React from 'react'
import useLogout from '../../../../hooks/useLogout'

function Logout() {

    const { loading, logout } = useLogout();

    return (
        <div>
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