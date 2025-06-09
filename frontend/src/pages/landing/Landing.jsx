import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center w-xs sm:w-xl md:w-3xl gap-2'>
            <div className="w-full">
                <div className="navbar bg-base-300 border-1 shadow-lg w-full rounded-box">
                    <div className="flex-1">
                        <p className="text-2xl font-bold font-mono">chatCourt</p>
                    </div>
                    <div className="flex-none">
                        <Link to="/login">
                            <button className="text-lg btn btn-ghost btn-square w-max font-mono p-1.5">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-max w-full bg-base-300 border-1 rounded-box font-mono text-center shadow-lg p-1.5'>
                <span className='text-2xl font-extrabold'>About us</span>
                <p className='text-justify font-bold'>Welcome to our chat-based debating platform, where structured arguments meet interactive discussions. Our platform is designed to simulate court proceedings, allowing users to engage in debates with a structured flow of arguments, witness and evidence presentation, and jury voting. Whether you're looking to refine your debating skills, engage in thought-provoking discussions, or experience a courtroom-like environment, our platform provides the tools to make it happen. With access control mechanisms, fair verdict presentations, and an immersive debate experience, we aim to revolutionize the way discussions unfold online. Stay tuned as we continue developing and enhancing our platform!</p>
            </div>
        </div>
    )
}

export default Landing