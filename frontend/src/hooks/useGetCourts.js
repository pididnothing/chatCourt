import React from 'react'
import toast from 'react-hot-toast'
import useCourt from '../store/useCourt';
function useGetCourts() {
    const [loading, setLoading] = React.useState(false);
    const [courts, setCourts] = React.useState([]);
    const { selectedCourt} = useCourt();
    React.useEffect(() => {
        const getCourts = async () => {
            setLoading(true);

            try {
                const res = await fetch(`/api/user/get-courts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
                });
                
                const data = await res.json();
                if (res.ok) {
                setCourts(data.courts);
                } else {
                toast.error(data.error);
                console.log(data.error);
                }
            } catch (error) {
                console.log(error.message);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getCourts();
    },[selectedCourt]);
    
    return { loading, courts };
}

export default useGetCourts;