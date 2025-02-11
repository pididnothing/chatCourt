import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Chatwindow from './chats/Chatwindow'

function Dashboard() {
    return (
        <div className='flex w-full h-full gap-1.5'>
            <Sidebar />
            <Chatwindow />
        </div>
    )
}

export default Dashboard