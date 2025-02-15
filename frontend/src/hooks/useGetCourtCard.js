import React from 'react'

function useGetCourtCard(courtRoomId) {
    const [loading, setLoading] = React.useState(false);
    const [courtCard, setCourtCard] = React.useState([]);

    React.useEffect(() => {
        const getCourtCard = async () => {
            setLoading(true);

            try {
                const res = await fetch(`/api/court/get-court-card/${courtRoomId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
                });
                
                const data = await res.json();
                if (res.ok) {
                setCourtCard(data.courtRoom);
                } else {
                console.log(data.error);
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        getCourtCard();
    },[]);
    
    return { loading, courtCard };
}

export default useGetCourtCard