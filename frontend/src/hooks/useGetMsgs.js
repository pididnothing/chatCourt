import React from 'react'
import toast from 'react-hot-toast'
import useCourt from '../store/useCourt'

const useGetMsgs = (courtRoomId) => {
    const { messages, setMessages } = useCourt()
    const [loading, setLoading] = React.useState(false)
    // console.log("Court Room ID: ", courtRoomId)
    React.useEffect(() => {
        const getMsgs = async () => {
            setLoading(true)
            if(courtRoomId===null) return
            try {
                const res = await fetch(`/api/court/get-msg/${courtRoomId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
                // console.log("data:",data)
                if (res.ok) {
                    setMessages(data.messages)
                } else {
                    toast.error(data.error)
                    console.log(data.error)
                }
            } catch (error) {
                console.log(error.message)
                toast.error('Something went wrong!')
            } finally {
                setLoading(false)
            }
        }
        getMsgs()
    }, [courtRoomId, setMessages])
    return { loading, messages }

}

export default useGetMsgs