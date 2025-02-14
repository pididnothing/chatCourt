import React from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext.jsx';

function useLogin() {

    const [loading, setLoading] = React.useState(false);
    const { authUser, setAuthUser } = useAuthContext();

    const login = async ({email,password}) => {

        const success = handleInputErrors({email, password});
        if(!success){
            toast.error("Invalid Input")
            return false;

        }
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 2000)

        try {
            const res = await fetch('/api/auth/login',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email,password})
            })
            
            const data = await res.json()
      
            if(res.ok){
              toast.success(data.message);
              localStorage.setItem("chat-user",JSON.stringify(data))
              setAuthUser(data);
            }
            else{
              toast.error(data.error);
            }
          } catch (error) {
            toast.error(error.message)
          }finally{
            setLoading(false)
          }
    }

    function handleInputErrors({email,password}) {
        if(email === '' || password === ''){
          toast.error('All fields are required')
          return false
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(email)) {
          toast.error('Invalid email format')
          return false
        }
        return true;
      }
    
      return {loading, login};
}
export default useLogin