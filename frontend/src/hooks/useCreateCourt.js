import React from 'react'

function useCreateCourt() {
    const [loading, setLoading] = React.useState(false);
    const [court, setCourt] = React.useState({});

    const createCourt = async (courtData) => {
        setLoading(true);
        var response= {data: null};
        try {
            const res = await fetch(`/api/court/create-court-room`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(courtData)
            });

            const data = await res.json();
            response.data = data;
            if (res.ok) {
                setCourt(data.court);
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
        return { status: response.data.status, body: response.data };
    };

    return { loading, court, createCourt };
}

export default useCreateCourt