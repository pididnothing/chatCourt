import React from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../context/authContext';

const useLogout = () => {
    const [loading, setLoading] = React.useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 2000)

        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error);
            }

            if (res.ok) {
                localStorage.removeItem("chat-user")
                setAuthUser(null)
                toast.success(data.message)
                window.location.reload()
            }
            else {
                console.log(data.error)
                toast.error(data.error)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };
    return { loading, logout };
}

export default useLogout