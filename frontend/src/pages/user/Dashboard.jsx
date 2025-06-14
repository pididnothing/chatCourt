import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Chatwindow from './chats/Chatwindow'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Dashboard() {

    if (window.innerWidth > 640) {
        return (
            <div className='w-full h-full gap-1.5 overflow-hidden'>
                <div className='flex flex-row w-full h-full gap-2.5'>
                    <Sidebar />
                    <Chatwindow />
                </div>
            </div>
        )
    }

    return (
        <div className='w-dvw h-dvh gap-1.5 overflow-hidden'>
            <Carousel width={'100%'} centerMode={false} autoFocus={false} axis='horizontal' preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showIndicators={false} showStatus={false} showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={false}>
                <div className='w-dvw h-dvh'>
                    <Sidebar />
                </div>
                <div className='w-dvw h-dvh'>
                    <Chatwindow />
                </div>
            </Carousel>
        </div>
    )
}

export default Dashboard