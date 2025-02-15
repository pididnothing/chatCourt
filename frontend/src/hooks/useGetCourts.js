import React from 'react'

function useGetCourts() {
    const [loading, setLoading] = React.useState(false);
    const [courts, setCourts] = React.useState([]);

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
                console.log(data.error);
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        getCourts();
    },[]);
    
    return { loading, courts };
}

export default useGetCourts;